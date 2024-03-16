import React, {useContext, useEffect, useRef, useState} from 'react';
import './MyBlogs.css';
import useBlog from "../../Hooks/useUserBlogs.jsx";
import { Link } from "react-router-dom";
import SearchContextProvider from "../../context/SearchContextProvider.jsx";
import { AuthContext } from "../../context/AuthContextProvider.jsx";
import axios from "axios";


function MyBlogs() {
    const { blogPostsUser } = useBlog();
    const { user } = useContext(AuthContext);
    const { searchQuery, setSearchQuery } = useContext(SearchContextProvider);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const token = localStorage.getItem("token")

    useEffect(() => {
        const filtered = blogPostsUser.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const reversedFilteredPosts = filtered.slice().reverse();
        setFilteredPosts(reversedFilteredPosts);
    }, [searchQuery, blogPostsUser]);

    const handleDelete = (postId) => {
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`, {
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
                <div className="innerMyBlogContainer">

                    <div className="prikbordTextMargin textCenter">
                        <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                        <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    </div>

                    <button className="WriteBlogButton" type="button">
                        <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>

                    <h4 className="totalBlogsCounter">Je hebt al {blogPostsUser.length} natuurblogs</h4>
                    <br/>
                </div>
            </section>

            <section className="outer-content-container" ref={containerRef}>
                <div className="inner-content-container">
                    <ul className="post-list">
                        {filteredPosts.slice(0, visiblePosts).map((post) => (
                            <li key={post.id} className="post-item">
                                <div className="post-image">
                                    <img src={"data:image/png;base64," + post.fileContent} alt={post.title}
                                         loading="lazy" className="post-image"/>
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
                                                                className="simpleButtonsRemove buttonRedRemove">Blog
                                                            verwijderen
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="myPostButtons">
                                                <div className="myBlogButtonContainer">
                                                    <button className="simpleButtonsTotalGreen myBlogButton">
                                                        <Link to={`/blogposts/${post.id}`} className="post-link">Blog
                                                            bekijken</Link>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="myPostButtons">
                                                <div className="myBlogButtonContainer">
                                                    <button className="simpleButtonsEdit buttonYellowEdit">
                                                        <Link to={`/blogEdit/${post.id}`} className="post-link">Blog
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

export default MyBlogs;

