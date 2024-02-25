import './ProfileDetail.css';
import {Link, useParams} from "react-router-dom";
import useBlog from "../../Hooks/useAllBlogs.jsx";
import useProfile from "../../Hooks/useAllUserProfiles.jsx";

function ProfileDetail() {


    // ALLEEN NOG REVERSE TOEVOEGEN


    //Alle blogs komen binnen uit de hook
    const {blogPostsAll} = useBlog();

    //Haal de gebruikersprofielen op uit de hook
    const {AllUserProfiles} = useProfile();

    const {username} = useParams(); // Haal de gebruikersnaam op uit de URL

    // Filter de gebruikersprofielen op basis van de gebruikersnaam in de URL
    const filteredProfile = AllUserProfiles.filter(prof => prof.username === username);

    // Filter blog posts by username
    const filteredPosts = blogPostsAll.filter(post => post.username === username);


    const totalPosts = filteredPosts.length;

    return (
        <>
            <div className="outer-content-container-column">
                <div className="inner-content-container-column">

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
                                    <h1>Profiel van {prof.username.charAt(0).toUpperCase() + prof.username.slice(1)}</h1>
                                    <br/>
                                    <p><strong>Naam:</strong> {prof.name.charAt(0).toUpperCase() + prof.name.slice(1)}</p>
                                    <p><strong>Email:</strong> {prof.email}</p>
                                    <p><strong>Regio:</strong> {prof.regio.charAt(0).toUpperCase() + prof.regio.slice(1)}</p>
                                    <br/>
                                    <p><strong>Bio:</strong> {prof.bio}</p>
                                </div>

                                <div className="profileCounter">
                                <h2 className="totalBlogsCounter"> {username.charAt(0).toUpperCase() + username.slice(1)} heeft {totalPosts} natuurblogs</h2>
                                </div>
                                {/* Render filtered blog posts */}
                                {filteredPosts.map((post) => (
                                    <li key={post.id} className="blog-post-item">
                                        <Link to={`/blogposts/${post.id}`} className="post-link">
                                            <div className="post-image"
                                                 style={{backgroundImage: `url(data:image/png;base64,${post.fileContent})`}}>
                                                <div className="onTopOfImageBox">
                                                    <h2 className="post-title">{post.title}</h2>
                                                    <p>Geschreven door <strong>{post.username}</strong></p>
                                                    <i>{post.date}</i>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
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

