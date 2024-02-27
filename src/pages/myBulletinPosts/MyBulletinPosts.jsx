import './MyBulletinPosts.css';
import useBulletinBoard from "../../Hooks/useUserBulletinBoards.jsx";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import SearchContext from "../../context/SearchContext.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

function MyBulletinPosts() {
    const { bulletinBoardPostUser } = useBulletinBoard();
    const { user } = useContext(AuthContext);

    // const bulletinBoardPostUser = bulletinBoardPostUser.slice().reverse();

    const handleDelete = (postId) => {
        console.log(postId)
        axios.delete(`http://localhost:8080/bulletin-boards/${user.username}/${postId}`)
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };


    return (
    <>
        <section className="outer-content-container">
            <div className="inner-content-container-column">
                <div className="prikbordTextMargin textCenter">
                    <h1>Prikbord</h1>
                    <p>Hier kan je een oproep doen aan alle gebruikers. <br/> Je kan bijvoorbeeld een opzoek doen voor
                        het vinden van een reismaatje, <br/> je camera te koop aanbieden of advies vragen hoe je het
                        beste insecten kan fotogrageren. </p>
                </div>

                <button id="WriteBlogButton" type="button">
                    <Link to="/WriteBulletin"><strong>Prikbord bericht schrijven</strong></Link>
                </button>


                <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                <h4 className="totalBlogsCounter">Je hebt {bulletinBoardPostUser.length} prikbord posts</h4>
                <br/>
            </div>
        </section>

        <section className="outer-content-container">
            <div className="inner-content-container">
                <ul className="myPostList">
                    {bulletinBoardPostUser.map((post) => (
                        <li key={post.id} className="myBlogPostItem">
                            <div className="post-image" style={{backgroundImage: `url(data:image/png;base64,${post.fileContent})`}}>
                                <div className="myBlogsOnTopButtonContainer">
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <form onSubmit={(e) => { e.preventDefault(); handleDelete(post.id) }}>
                                                <button type="submit" className="simpleButtonsRemove buttonRedRemove">Bericht verwijderen</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <button className="simpleButtonsTotalGreen myBlogButton"><Link to={`/prikbordposts/${post.id}`} className="post-link">Bericht bekijken</Link></button>
                                        </div>
                                    </div>
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <button className="simpleButtonsEdit buttonYellowEdit"><Link to={`/editprikbord/${post.id}`} className="post-link">Bericht aanpassen</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="onTopOfImageBox">
                                    <div>
                                        <h2 className="post-title">{post.title}</h2>
                                        <p>Geschreven door <strong>{post.username.charAt(0).toUpperCase() + post.username.slice(1)}</strong></p>
                                        <i>{post.date}</i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
);
}

export default MyBulletinPosts;

