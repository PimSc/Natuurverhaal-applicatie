import './BlogOverview.css';
import posts from "../../constants/BlogPosts.json";
import { Link } from "react-router-dom";

function BlogOverview() {


    return (
        <>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {posts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <h2 className="post-title">{post.title}</h2>
                                    <p>{post.created}</p>
                                    <p>Geschreven door {post.author}</p>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </>
    )
}

export default BlogOverview;


