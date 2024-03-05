import './ProfileDetail.css';
import {Link, useParams} from "react-router-dom";
import useBlog from "../../Hooks/useAllBlogs.jsx";
import useProfile from "../../Hooks/useAllUserProfiles.jsx";
import React, {useEffect, useRef, useState} from "react";

function ProfileDetail() {


    const {blogPostsAll} = useBlog();
    const {AllUserProfiles} = useProfile();
    const {username} = useParams();

    // Filter de gebruikersprofielen op basis van de gebruikersnaam in de URL
    const filteredProfile = AllUserProfiles.filter(prof => prof.username === username);

    // Filter blog posts by username
    let filteredPosts = blogPostsAll.filter(post => post.username === username);
    // Omkeren van de blogPosts array zodat de nieuwe blogposts bovenaan komen te staan
    filteredPosts = filteredPosts.slice().reverse();


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
    }, [filteredPosts]); // Luister naar veranderingen in filteredPosts array
    // ----- Lazy loading end -----


    const totalPosts = filteredPosts.length;

    return (
        <>
            <div className="outer-content-container-column" >
                <div className="inner-content-container-column" ref={containerRef}>

                    {/* Als er een gebruikersprofiel is gevonden, toon dan de gegevens */}
                    {filteredProfile.length > 0 ? (
                        filteredProfile.map((prof) => (
                            <>
                                <div className="profileImage">
                                    <img
                                        src={"data:image/png;base64," + prof.fileContent}
                                        alt="Profiel foto"
                                    />
                                </div>
                                <div className="profileTextContainer textStart">
                                    <h1>Profiel
                                        van {prof.username.charAt(0).toUpperCase() + prof.username.slice(1)}</h1>
                                    <br/>
                                    <p><strong>Naam:</strong> {prof.name.charAt(0).toUpperCase() + prof.name.slice(1)}
                                    </p>
                                    <p><strong>Email:</strong> {prof.email}</p>
                                    <p>
                                        <strong>Regio:</strong> {prof.regio.charAt(0).toUpperCase() + prof.regio.slice(1)}
                                    </p>
                                    <br/>
                                    <p><strong>Bio:</strong> {prof.bio}</p>
                                </div>

                                <div className="profileCounter">
                                    <h2 className="totalBlogsCounter"> {username.charAt(0).toUpperCase() + username.slice(1)} heeft {totalPosts} natuurblogs</h2>
                                </div>

                                <ul className="post-list">
                                    {filteredPosts.slice(0, visiblePosts).map((post) => (
                                        <li key={post.id} className="post-item">
                                            <Link to={`/blogposts/${post.id}`}>
                                                <div className="post-image">
                                                    <img
                                                        src={"data:image/png;base64," + post.fileContent}
                                                        alt={post.title}
                                                        loading="lazy"
                                                        className="post-image"
                                                    />
                                                    <div className="onTopOfImageBox">
                                                        <h2>{post.title}</h2>
                                                        <p>
                                                            Geschreven door{" "}
                                                            {post.username.charAt(0).toUpperCase() +
                                                                post.username.slice(1)}
                                                        </p>
                                                        <i>{post.date}</i>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ))
                    ) : (
                        // Als er geen gebruikersprofiel is gevonden, toon dan dit bericht
                        <p>Deze gebruiker heeft geen openbaar profiel</p>
                    )}

                </div>
            </div>
        </>
    );
}

export default ProfileDetail;
