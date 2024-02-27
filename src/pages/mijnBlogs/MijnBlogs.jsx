import React, { useContext, useEffect, useState } from 'react';
import './MijnBlogs.css';
import useBlog from "../../Hooks/useUserBlogs.jsx";
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext.jsx";
import { AuthContext } from "../../context/AuthContextProvider.jsx";
import axios from "axios";

function MijnBlogs() {
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

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <button id="WriteBlogButton" type="button">
                        <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>

                    <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    <h4 className="totalBlogsCounter">Je hebt al {blogPostsUser.length} natuurblogs</h4>
                    <br />
                </div>
            </section>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="myPostList">
                        {filteredPosts.map((post) => (
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
                                                <button className="simpleButtonsTotalGreen myBlogButton"><Link to={`/blogposts/${post.id}`} className="post-link">Blog bekijken</Link></button>
                                            </div>
                                        </div>
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="simpleButtonsEdit buttonYellowEdit"><Link to={`/blogEdit/${post.id}`} className="post-link">Blog aanpassen</Link></button>
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

export default MijnBlogs;
