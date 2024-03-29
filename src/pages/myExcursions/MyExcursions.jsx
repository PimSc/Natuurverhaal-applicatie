import './MyExcursions.css';
import {Link} from "react-router-dom";
import React, {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";


function MyExcursions() {
    const token = localStorage.getItem("token")
    const {excursionsAll} = useAllExcursions();
    const {excursionsIsLoading} = useAllExcursions();

    const handleDelete = (postId) => {
        axios.delete(`http://localhost:8080/excursies/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

            .then(response => {
                console.log('Post succesvol verwijderd');
                window.location.reload();
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

    // Loading gif
    if (excursionsIsLoading) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }


return (
    <>
        <section className="outer-content-container">
            <div className="innerMyBlogContainer">

                <div className="prikbordTextMargin textCenter">
                    <h1 id="myBlogsTitleStyling">Excursies overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                </div>

                <button id="WriteBlogButton" className="WriteBlogButton" type="button">
                    <Link to="/WriteBlog"><strong>Excursie aanmaken</strong></Link>
                </button>

                <h4 className="totalBlogsCounter">Er zijn {excursionsAll.length} excursies</h4>
                <br/>
            </div>
        </section>

        <section className="outer-content-container" ref={containerRef}>
            <div className="inner-content-container">
                <ul className="post-list">
                    {excursionsAll.slice(0, visiblePosts).map((post) => (
                        <li key={post.id} className="post-item">
                            <div className="post-image">
                                <img src={"data:image/png;base64," + post.fileContent} alt={post.title} loading="lazy"
                                     className="post-image"/>
                                <div className="onTopOfImageBox">
                                    <h2>{post.title}</h2>
                                    <p>Geschreven
                                        door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
                                    <i>{post.date}</i>
                                    <div className="myBlogsOnTopButtonContainer">
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleDelete(post.id)
                                                }}>
                                                    <button type="submit"
                                                            className="simpleButtonsRemove buttonRedRemove">Excursie
                                                        verwijderen
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="simpleButtonsTotalGreen myBlogButton">
                                                    <Link to={`/excursiePosts/${post.id}`} className="post-link">Excursie
                                                        bekijken</Link>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="simpleButtonsEdit buttonYellowEdit">
                                                    <Link to={`/excursionEdit/${post.id}`} className="post-link">Excursie
                                                        aanpassen</Link>
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

export default MyExcursions;