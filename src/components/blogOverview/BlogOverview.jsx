import { useContext, useEffect, useState, useRef } from 'react';
import './BlogOverview.css';
import { Link } from 'react-router-dom';
import SearchContextProvider from "../../context/SearchContextProvider.jsx";
import useBlogPosts from "../../Hooks/useAllBlogs.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function BlogOverview() {
    const {searchQuery} = useContext(SearchContextProvider);
    const {blogPostsAll} = useBlogPosts();
    const {blogPostsIsLoading} = useBlogPosts();
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

    // ----- Lazy loading start -----
    const [visiblePosts, setVisiblePosts] = useState(6); // Het aantal zichtbare blogposts
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
    if (blogPostsIsLoading) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            {filteredPosts.length > 0 && (
                <section className="outer-content-container" ref={containerRef}>
                    <div className="inner-content-container">
                        <ul className="post-list">
                            {filteredPosts.slice(0, visiblePosts).map((post) => (
                                <section key={post.id}>
                                    <li className="post-item">
                                        <Link to={`/blogposts/${post.id}`}>
                                            <div className="post-image">
                                                <img src={"data:image/png;base64," + post.fileContent} alt={post.title}
                                                     loading="lazy" className="post-image"/>
                                                <div className="onTopOfImageBox">
                                                    <h2>{post.title}</h2>
                                                    <p>Geschreven door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
                                                    <i>{post.date}</i>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </section>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
            {filteredPosts.length === 0 && (
                <div className="inner-content-container-column margin20PxTop">Er zijn geen blogposts gevonden.</div>
            )}
        </>
    );
}

export default BlogOverview;
