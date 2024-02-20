import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import useBlog from "../../Hooks/useBlogAll.jsx";
import { useNavigate } from 'react-router-dom';
import formatDateString from '../../helpers/formatDateString.jsx';
import React from "react";


function BlogPostDetail() {


    const navigate = useNavigate();

    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };


    const { id } = useParams(); // Haal het ID uit de URL-parameters
        const { blogPosts } = useBlog();
        const post = blogPosts.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID

        if (!post) {
            return <div>Blogpost niet gevonden</div>; // Toon een foutmelding als de blogpost niet wordt gevonden
        }


    return (
        <>
            <section className="outer-content-container-column">


                <img className="blogDetailImageHeader" src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                <div className="inner-content-container">


                    <div className="textCenter">
                        <h1>{post.title}</h1>
                        <h4>{post.subtitle}</h4>
                        <p><Link to={`/ProfileDetail/${post.username}`}>Geschreven door {post.username} </Link></p>
                        <i>{post.date}</i>
                        <div className="textStart">
                        </div>
                        {/*<p>Geschreven door <em>{post.author}</em> op {formatDateString(post.created)}</p>*/}
                        <br/>
                        <p className="textStart">{post.content}</p>
                        <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                             alt={post.caption}/>
                        <br/>
                        <p>Blog categorie: {post.categories}</p>
                        <Link to={`/ProfileDetail/${post.username}`}><strong>Bezoek de profiel pagina
                            van {post.username}</strong> </Link>

                        <Link to="/" className="back-link">
                            <br/>
                            <button className="SimpleButtons" onClick={handleTerugClick}> Terug naar de vorige pagina
                            </button>
                            <br/>
                            <br/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPostDetail;