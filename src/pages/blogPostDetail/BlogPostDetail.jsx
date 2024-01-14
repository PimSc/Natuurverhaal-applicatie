import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import posts from '../../constants/Blogs.json';
import formatDateString from '../../helpers/formatDateString.js';
import { CaretLeft, Clock } from "@phosphor-icons/react";


// Op deze pagina wordt 1 specifieke blogpost getoond wanneer deze op de homepage wordt aangeklikt.

function BlogPostDetail() {
    const { id } = useParams();

    const { title, readTime, subtitle, author, created, content, comments, shares } = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="textContainer">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                    <span className="post-detail-read-time">
                        <p> <Clock color="#50535C" size={18} /> Leestijd {readTime} minuten</p>
                    </span>
                    <br/>
                    <p>{content}</p>
                    <p>{comments} reacties - {shares} keer gedeeld</p>

                    <Link to="/" className="back-link">
                        <br/>
                        <p><CaretLeft color="#38E991" size={22} /> Terug naar de overzichtspagina</p>
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