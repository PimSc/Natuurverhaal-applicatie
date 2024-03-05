import React, {useContext, useEffect, useRef, useState} from 'react';
import './MyBlogs.css';
import useBlog from "../../Hooks/useUserBlogs.jsx";
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext.jsx";
import { AuthContext } from "../../context/AuthContextProvider.jsx";
import axios from "axios";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function MyBlogs() {
    const { blogPostsUser } = useBlog();
    const { user } = useContext(AuthContext);
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const filtered = blogPostsUser.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const reversedFilteredPosts = filtered.slice().reverse();
        setFilteredPosts(reversedFilteredPosts);
    }, [searchQuery, blogPostsUser]);

    const handleDelete = (postId) => {
        console.log(postId)
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`)
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




    // Loading gif
    if (filteredPosts.length === 0) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }


    return (
        <>
            <section className="outer-content-container">
                <div className="innerMyBlogContainer">

                    <div className="prikbordTextMargin textCenter">
                        <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                        <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    </div>

                    <button id="WriteBlogButton" type="button">
                    <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>

                    <h4 className="totalBlogsCounter">Je hebt al {blogPostsUser.length} natuurblogs</h4>
                    <br/>
                </div>
            </section>

            <section className="outer-content-container" ref={containerRef}>
                <div className="inner-content-container">
                    <ul className="myPostList">
                        {filteredPosts.slice(0, visiblePosts).map((post) => (
                            <li key={post.id} className="myBlogPostItem">
                                <div className="post-image" style={{backgroundImage: `url(data:image/png;base64,${post.fileContent})`}}>
                                    <div className="myBlogsOnTopButtonContainer">
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <form onSubmit={(e) => { e.preventDefault(); handleDelete(post.id) }}>
                                                    <button type="submit" className="simpleButtonsRemove buttonRedRemove">Blog verwijderen</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="simpleButtonsTotalGreen myBlogButton"><Link to={`/blogposts/${post.id}`} className="post-link" >Blog bekijken</Link></button>
                                            </div>
                                        </div>
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="simpleButtonsEdit buttonYellowEdit">  <Link
                                                    to={`/blogEdit/${post.id}`}
                                                    className="post-link"
                                                >
                                                    Blog aanpassen
                                                </Link></button>
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

export default MyBlogs;
