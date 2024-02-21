import React, {useContext} from 'react';
import './MijnBlogs.css';
import useBlog from "../../Hooks/useBlogUser.jsx";
import { Link } from "react-router-dom";
import {AuthContext} from '../../context/AuthContextProvider.jsx';


function MijnBlogs() {
    const { blogPostsUser } = useBlog();


    const totalPosts = blogPostsUser.length;


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
                        {blogPostsUser.map((post) => (
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
