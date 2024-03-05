import React, { useContext, useEffect, useState } from 'react';
import './BlogOverview.css';
import { Link } from 'react-router-dom';
import SearchContext from "../../context/SearchContext.jsx";
import useBlog from "../../Hooks/useAllBlogs.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";



function BlogOverview() {
    const {searchQuery} = useContext(SearchContext);
    const {blogPostsAll} = useBlog();
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const calculateFilteredPosts = () => {
            // Omkeren van de blogPostsAll array zodat de nieuwe blogposts bovenaan komen te staan
            const reversedPosts = blogPostsAll.slice().reverse();
            //filtert de blogs doormiddel van de zoekbalk
            const filtered = reversedPosts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.username.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        };

        calculateFilteredPosts();
    }, [searchQuery, blogPostsAll]);


    // Loading gif
    if (filteredPosts.length === 0) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/blogposts/${post.id}`}>
                                    <div className="post-image">
                                        <img src={"data:image/png;base64," + post.fileContent} alt={post.title}
                                             loading="lazy" className="post-image"/>
                                        <div className="onTopOfImageBox">
                                            <h2>{post.title}</h2>
                                            <p>Geschreven
                                                door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
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
