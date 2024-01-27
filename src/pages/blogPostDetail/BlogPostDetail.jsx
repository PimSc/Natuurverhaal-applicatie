import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import posts from '../../constants/BlogPosts.json';
import formatDateString from '../../helpers/formatDateString.jsx';


// Op deze pagina wordt 1 specifieke blogpost getoond wanneer deze op de homepage wordt aangeklikt.

function BlogPostDetail() {
    const { id } = useParams();

    const { image, caption, title, subtitle, author, created, content,} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
            <section className="outer-content-container-column">
                <img src={image} alt={caption}/>

                <div className="inner-content-container">


                    <div className="textCenter">
                    <h1>{title}</h1>
                        <br/>
                    <h3>{subtitle}</h3>
                        <div className="textStart">
                        </div>
                    <p>Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                    <br/>
                    <p className="textStart">{content}</p>

                    <Link to="/" className="back-link">
                        <br/>
                        <button className="SimpleButtons"> Terug naar het blogs overzicht</button>
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