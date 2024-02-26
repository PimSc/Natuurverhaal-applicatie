import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import useBlog from "../../Hooks/useAllBlogs.jsx";
import { useNavigate } from 'react-router-dom';
import formatDateString from '../../helpers/formatDateString.jsx';
import React, { useRef } from "react";
import LoadingGif from "./../../../public/assets/icons/LoadingGif.gif";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function BlogPostDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Haal het ID uit de URL-parameters
    const { blogPostsAll } = useBlog();
    const post = blogPostsAll.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID
    const contentRef = useRef(null); // Referentie naar de content container

    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };

    const capturePageAndDownloadPDF = () => {
        const content = contentRef.current; // Get the content container reference
        html2canvas(content, {
            scrollY: -window.scrollY // Capture the entire page by setting scrollY to negative of window scrollY
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210; // A4 size: 210mm x 297mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('blog_post_detail.pdf');
        });
    };

    if (!post) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            <section className="outer-content-container-column">
                <img className="blogDetailImageHeader" src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>
                <div className="inner-content-container" >
                    <div className="textCenter">

                        <div ref={contentRef}>
                        <h1>{post.title}</h1>
                        <h4>{post.subtitle}</h4>
                        <p>Categorie: {post.categories}</p>
                        <p><Link to={`/ProfileDetail/${post.username}`}>Geschreven door {post.username.charAt(0).toUpperCase() + post.username.slice(1)} </Link></p>
                        <i>{post.date}</i>
                        <div className="textStart">
                        </div>
                        <br/>
                        <p className="textStart">{post.content}</p>
                        <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                             alt={post.caption}/>
                        <br/>
                        </div>
                        <Link to={`/ProfileDetail/${post.username}`}><strong>Bezoek de profiel pagina
                            van {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</strong> </Link>

                        <Link to="/" className="back-link">
                            <br/>
                            <button className="simpleButtons" onClick={handleTerugClick}> Terug naar de vorige pagina
                            </button>
                            <br/>
                            <br/>
                        </Link>
                        <button onClick={capturePageAndDownloadPDF}>Download deze pagina als PDF</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPostDetail;
