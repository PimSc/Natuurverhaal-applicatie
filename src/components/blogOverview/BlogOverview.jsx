import React, { useContext, useEffect, useState } from 'react';
import './BlogOverview.css';
import { Link } from 'react-router-dom';
import SearchContext from "../../context/SearchContext.jsx";
import useBlog from "../../Hooks/useAllBlogs.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function BlogOverview() {
    const { searchQuery } = useContext(SearchContext);
    const { blogPostsAll } = useBlog();

    // Define a state to hold filtered posts
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Define a function to calculate filtered posts
        const calculateFilteredPosts = () => {
            // Omkeren van de blogPostsAll array zodat de nieuwe blogposts bovenaan komen te staan
            const reversedPosts = blogPostsAll.slice().reverse();
            const filtered = reversedPosts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.username.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        };

        // Call the function to calculate filtered posts
        calculateFilteredPosts();
    }, [searchQuery, blogPostsAll]); // Include searchQuery and blogPostsAll as dependencies



    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="blog-post-item ">
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <div className="post-image"
                                         style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>

                                        <div className="onTopOfImageBox">
                                            <h2 className="post-title">{post.title}</h2>
                                            <p>Geschreven door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
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

export default BlogOverview;
