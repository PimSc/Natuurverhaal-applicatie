import { useState, useEffect } from 'react';
import './BlogOverview.css';
import useBlog from "../../Hooks/useBlog.jsx";
import { Link } from 'react-router-dom';

function BlogOverview() {
    // Haal de blogposts uit useBlog() indien nodig
    const { blogPosts } = useBlog();

    const [searchTerm, setSearchTerm] = useState('');
    // Initialiseer filteredPosts met de blogposts
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

    const handleChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        // Filter de blogposts
        const filtered = blogPosts.filter(post =>
            post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.subtitle.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.username.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    // Update filteredPosts wanneer blogPosts verandert
    useEffect(() => {
        setFilteredPosts(blogPosts);
    }, [blogPosts]);

    return (
        <>
            <div className="elementCenterContainer" id="searchbarBlogOvervieuw">
                <form>
                    <input
                        className="searchBar"
                        type="text"
                        name="query"
                        placeholder="Zoek..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>
            </div>
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
                                            {/*<p>Geschreven door <strong>{post.author}</strong></p>*/}
                                            <p>Geschreven door: <Link to={`/ProfileDetail/${post.username}`}><strong>{post.username}</strong> </Link></p>
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

export default BlogOverview;