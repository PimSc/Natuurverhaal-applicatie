import './BulletinBoardOverview.css';
import { Link } from "react-router-dom";
import useBlog from "../../Hooks/useAllBulletinBoards.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";
import React from "react";

function BulletinBoardOverview() {
    const { bulletinBoardsAll } = useBlog();
    const reversedPosts = bulletinBoardsAll.slice().reverse();

    if (reversedPosts.length === 0) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            <section className="blogOverviewSection outer-content-container">
                <div className="inner-content-container-column">
                    <ul className="post-list">
                        {reversedPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/prikbordPosts/${post.id}`} className="post-link">
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

export default BulletinBoardOverview;