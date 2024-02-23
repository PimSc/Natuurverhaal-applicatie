import React, {useContext, useEffect, useState} from 'react';
import './MijnBlogs.css';
import useBlog from "../../Hooks/useUserBlogs.jsx";
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext.jsx";


function MijnBlogs() {

    //Hier komen alle blogs van de ingelogde user binnen uit de Hook
    const { blogPostsUser } = useBlog();

    //Telt hoeveel blogs de user heeft
    const totalPosts = blogPostsUser.length;

    //Hier komt de zoekterm uit de zoekbalk binnen
    const {searchQuery, setSearchQuery, handleChange} = useContext(SearchContext);

    // Hier worden alle blogs door een filter gehaald
    const [filteredPosts, setFilteredPosts] = useState(blogPostsUser);

    useEffect(() => {
        const filtered = blogPostsUser.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchQuery, blogPostsUser]);








    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <button id="WriteBlogButton" type="button">
                        <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>
                    <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    <h4 className="totalBlogsCounter">Je hebt al {totalPosts} natuurblogs</h4>
                    <br/>
                    <ul className="post-list">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="blog-post-item">
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <div className="post-image"
                                         style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>
                                        <div className="onTopOfImageBox">
                                            <h2 className="post-title">{post.title}</h2>
                                            <p>Geschreven door <strong>{post.username}</strong></p>
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

export default MijnBlogs;
