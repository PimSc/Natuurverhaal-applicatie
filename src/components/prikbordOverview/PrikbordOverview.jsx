import './PrikbordOverview.css';
import { Link } from "react-router-dom";
import useBlog from "../../Hooks/useAllBulletinBoards.jsx";
import React from "react";


function PrikbordOverview() {
    const { bulletinBoardsAll } = useBlog();
    const reversedPosts = bulletinBoardsAll.slice().reverse();

    const handleLinkViewBulletinClick = () => {
        window.scrollTo(0, 400);
    };

    return (
        <>
            <section className="blogOverviewSection outer-content-container">
                <div className="inner-content-container-column">

                    <ul className="post-list">
                        {reversedPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/prikbordPosts/${post.id}`} className="post-link" onClick={handleLinkViewBulletinClick}>
                                    <div className="post-image"
                                         style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>
                                        <div className="onTopOfImageBox">
                                            <h2 className="post-title">{post.title}</h2>
                                            <p>Auteur: {post.author}</p>
                                            <i>{post.date}</i>
                                        </div>
                                        </div>
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