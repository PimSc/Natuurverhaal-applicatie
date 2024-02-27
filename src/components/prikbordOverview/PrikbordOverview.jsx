import './PrikbordOverview.css';
import { Link } from "react-router-dom";
import useBlog from "../../Hooks/useAllBulletinBoards.jsx";
import React from "react";


function PrikbordOverview() {
    const { bulletinBoardsAll } = useBlog();


    return (
        <>
            <section className="blogOverviewSection outer-content-container">
                <div className="inner-content-container-column">

                    <div className="prikbordTextMargin textCenter">
                    <h1>Prikbord</h1>
                    <p>Hier kan je een oproep doen aan alle gebruikers. <br/> Je kan bijvoorbeeld een opzoek doen voor het vinden van een reismaatje, <br/> je camera te koop aanbieden of advies vragen hoe je het beste insecten kan fotogrageren. </p>
                </div>

                    <ul className="post-list">
                        {bulletinBoardsAll.map((post) => (
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

export default PrikbordOverview;