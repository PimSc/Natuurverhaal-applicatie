import './ProfileDetail.css';
import { Link, useParams } from "react-router-dom";
import useBlog from "../../Hooks/useAllBlogs.jsx";
import useProfile from "../../Hooks/useAllUserProfiles.jsx";

function ProfileDetail() {


    // ALLEEN NOG REVERSE TOEVOEGEN
    //


    //Alle blogs komen binnen uit de hook
    const { blogPostsAll } = useBlog();

    //Haal de gebruikersprofielen op uit de hook
    const { AllUserProfiles } = useProfile();

    const { username } = useParams(); // Haal de gebruikersnaam op uit de URL

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
                                <img
                                    src={"data:image/png;base64," + prof.fileContent}
                                    alt="Profiel foto"
                                    style={{ width: 400, height: 400 }} />

                                <h2>Username: {prof.username}</h2>
                                <h2>Profielpagina van {prof.name}</h2>
                                <h2>Email: {prof.email}</h2>
                                <h2>Regio: {prof.regio}</h2>
                                <h2>Bio: {prof.bio}</h2>
                                <br /><br />

                                <h2 className="totalBlogsCounter"> {username} heeft al {totalPosts} natuurblogs</h2>

                                {/* Render filtered blog posts */}
                                {filteredPosts.map((post) => (
                                    <li key={post.id} className="blog-post-item">
                                        <Link to={`/blogposts/${post.id}`} className="post-link">
                                            <div className="post-image" style={{ backgroundImage: `url(data:image/png;base64,${post.fileContent})` }}>
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

