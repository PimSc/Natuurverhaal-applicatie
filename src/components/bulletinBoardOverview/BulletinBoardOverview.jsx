import './BulletinBoardOverview.css';
import {Link} from "react-router-dom";
import useAllBulletinBoards from "../../Hooks/useAllBulletinBoards.jsx";
import {useEffect, useRef, useState} from "react";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function BulletinBoardOverview() {
    const {bulletinBoardsAll} = useAllBulletinBoards();
    const {bulletinIsLoading} = useAllBulletinBoards();

    const reversedPosts = bulletinBoardsAll.slice().reverse();

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
    if (bulletinIsLoading) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            {reversedPosts.length > 0 && (
                <section className="outer-content-container" ref={containerRef}>
                    <div className="inner-content-container">
                        <ul className="post-list">
                            {reversedPosts.slice(0, visiblePosts).map((post) => (
                                <section key={post.id}>
                                <li className="post-item">
                                    <Link to={`/prikbordPosts/${post.id}`}>
                                        <div className="post-image">
                                            <img
                                                src={"data:image/png;base64," + post.fileContent} alt={post.title}
                                                loading="lazy"
                                                className="post-image"/>
                                            <div className="onTopOfImageBox">
                                                <h2>{post.title}</h2>
                                                <p>Geschreven
                                                    door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
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
            {reversedPosts.length === 0 && (
                <div className="inner-content-container-column margin20PxTop">Er zijn geen prikbord berichten gevonden.</div>
            )}
        </>
    );
}

export default BulletinBoardOverview;
