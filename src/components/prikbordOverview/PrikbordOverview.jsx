import './PrikbordOverview.css';
import PrikbordPosts from "../../constants/PrikbordPosts.json";
import {Link} from "react-router-dom";

function PrikbordOverview() {

    return (
        <>
            <section className="blogOverviewSection outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {PrikbordPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/prikbordposts/${post.id}`} className="post-link">
                                    <h2 className="post-title">{post.title}</h2>
                                    <p>Geschreven door {post.author}</p>
                                    <i className="iGrey">Datum - {post.created}</i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default PrikbordOverview;