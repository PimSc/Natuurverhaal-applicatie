import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import useBlog from "../../Hooks/useBlog.jsx";
import formatDateString from '../../helpers/formatDateString.jsx';


function BlogPostDetail() {


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
                        <br/>
                        <h3>{post.subtitle}</h3>
                        <p>author: <Link to={`/ProfileDetail/${post.username}`}>{post.username}</Link></p>
                        <div className="textStart">
                        </div>
                        {/*<p>Geschreven door <em>{post.author}</em> op {formatDateString(post.created)}</p>*/}
                        <br/>
                        <p className="textStart">{post.content}</p>
                        <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                             alt={post.caption}/>

                        <Link to="/" className="back-link">
                            <br/>
                            <button className="SimpleButtons"> Terug naar blogs</button>
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