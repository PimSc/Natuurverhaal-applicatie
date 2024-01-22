import { useState } from 'react';
import './BlogOverview.css';
import posts from '../../constants/BlogPosts.json';
import { Link } from 'react-router-dom';
import SearchBar from "../searchBar/SearchBar.jsx";

function BlogOverview() {
    const [filteredPosts, setFilteredPosts] = useState(posts);

    // Deze functie wordt doorgegeven aan de SearchBar-component en wordt aangeroepen wanneer de zoekterm verandert.
    const handleSearch = (searchTerm) => {
        // Voer hier de filterlogica uit op basis van de zoekterm.
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    return (
        <>
            <div className="elementCenterContainer" id="searchbarBlogOvervieuw">
            <SearchBar onSearch={handleSearch} />
            </div>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <h2 className="post-title">{post.title}</h2>
                                    <p>{post.created}</p>
                                    <p>Geschreven door {post.author}</p>
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
