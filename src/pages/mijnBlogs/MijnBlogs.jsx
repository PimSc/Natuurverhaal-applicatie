import React, {useContext} from 'react';
import './MijnBlogs.css';
import useBlog from "../../Hooks/useBlog.jsx";
import { Link } from "react-router-dom";
import {AuthContext} from '../../context/AuthContextProvider.jsx';


function MijnBlogs() {
    const { blogPosts } = useBlog();

    const {user} = useContext(AuthContext);
    console.log(user)

    // Filter de blogposts op gebruikersnaam "test"
    const filteredPosts = blogPosts.filter(post => post.username === user.username);

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <button className="SimpleButtons" id="WriteBlogButton" type="button">
                        <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>
                    <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                    <ul className="post-list">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="blog-post-item">
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <div className="post-image" style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>
                                        <div className="onTopOfImageBox">
                                            <h2 className="post-title">{post.title}</h2>
                                            <p>Geschreven door <strong>{post.username}</strong></p>
                                            <i>{post.created}</i>
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



