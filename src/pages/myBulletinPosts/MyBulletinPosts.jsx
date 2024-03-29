import './MyBulletinPosts.css';
import useBulletinBoard from "../../Hooks/useUserBulletinBoards.jsx";
import React, {useContext, useEffect, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function MyBulletinPosts() {
    const { bulletinBoardPostUser } = useBulletinBoard();
    const { user } = useContext(AuthContext);
    const reversedPosts = bulletinBoardPostUser.slice().reverse();
    const token = localStorage.getItem("token")

    const handleDelete = (postId) => {
        axios.delete(`http://localhost:8080/bulletin-boards/${user.username}/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    // ----- Lazy loading start -----
    const [visiblePosts, setVisiblePosts] = useState(3); // Het aantal zichtbare blogposts
    const containerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                window.innerHeight + window.scrollY >= containerRef.current.offsetTop + containerRef.current.clientHeight
            ) {
                // Wanneer de gebruiker de onderkant van de pagina bereikt, voeg 3 extra posts toe
                setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ----- Lazy loading end -----




    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <div className="prikbordTextMargin textCenter">
                        <h1>Prikbord</h1>
                        <p>Hier kan je een oproep doen aan alle gebruikers. <br/> Je kan bijvoorbeeld een opzoek doen
                            voor
                            het vinden van een reismaatje, <br/> je camera te koop aanbieden of advies vragen hoe je het
                            beste insecten kan fotogrageren. </p>
                    </div>

                    <button className="WriteBlogButton" type="button">
                        <Link to="/WriteBulletin"><strong>Prikbord bericht schrijven</strong></Link>
                    </button>


                    <h1 id="myBlogsTitleStyling">Mijn prikbord overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    <h4 className="totalBlogsCounter margin20PxTop">Je hebt {bulletinBoardPostUser.length} prikbord posts</h4>
                    <br/>
                </div>
            </section>

            <section className="outer-content-container" ref={containerRef}>
                <div className="inner-content-container">
                    <ul className="post-list">
                        {reversedPosts.slice(0, visiblePosts).map((post) => (
                            <li key={post.id} className="post-item">
                                <div className="post-image">
                                    <img src={"data:image/png;base64," + post.fileContent} alt={post.title} loading="lazy" className="post-image"/>
                                    <div className="onTopOfImageBox">
                                        <h2>{post.title}</h2>
                                        <p>Geschreven door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
                                        <i>{post.date}</i>
                                        <div className="myBlogsOnTopButtonContainer">
                                            <div className="myPostButtons">
                                                <div className="myBlogButtonContainer">
                                                    <form onSubmit={(e) => {
                                                        e.preventDefault();
                                                        handleDelete(post.id)
                                                    }}>
                                                        <button type="submit" className="simpleButtonsRemove buttonRedRemove">Bericht verwijderen</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="myPostButtons">
                                                <div className="myBlogButtonContainer">
                                                    <button className="simpleButtonsTotalGreen myBlogButton">
                                                        <Link to={`/prikbordposts/${post.id}`} className="post-link">Bericht bekijken</Link>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="myPostButtons">
                                                <div className="myBlogButtonContainer">
                                                    <button className="simpleButtonsEdit buttonYellowEdit">
                                                        <Link to={`/editprikbord/${post.id}`} className="post-link">Bericht aanpassen</Link>
                                                    </button>
                                                </div>
                                            </div>
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

