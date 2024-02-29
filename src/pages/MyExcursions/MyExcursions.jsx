import './MyExcursions.css';
import {Link} from "react-router-dom";
import React, {useContext} from "react";
import useBlog from "../../Hooks/useAllExcursions.jsx";
import axios from "axios";
import { AuthContext } from "../../context/AuthContextProvider.jsx";

function MyExcursions() {
    const { ExcursionsAll } = useBlog();
    const { user } = useContext(AuthContext);

    const handleDelete = (postId) => {
        console.log(postId)
        axios.delete(`http://localhost:8080/excursies/${user.username}/${postId}`)
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };





return (
<>



        <section className="outer-content-container">
            <div className="innerMyBlogContainer">

                <div className="prikbordTextMargin textCenter">
                    <h1 id="myBlogsTitleStyling">Excursies overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                </div>

                <button id="WriteBlogButton" type="button">
                    <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                </button>



                <h4 className="totalBlogsCounter">Je hebt al {ExcursionsAll.length} natuurblogs</h4>
                <br/>
            </div>
        </section>

        <section className="outer-content-container">
            <div className="inner-content-container">
                <ul className="myPostList">
                    {ExcursionsAll.map((post) => (
                        <li key={post.id} className="myBlogPostItem">
                            <div className="post-image" style={{backgroundImage: `url(data:image/png;base64,${post.fileContent})`}}>
                                <div className="myBlogsOnTopButtonContainer">
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <form onSubmit={(e) => { e.preventDefault(); handleDelete(post.id) }}>
                                                <button type="submit" className="simpleButtonsRemove buttonRedRemove">Excursie verwijderen</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <button className="simpleButtonsTotalGreen myBlogButton"><Link to={`/excursiePosts/${post.id}`} className="post-link">Excursie bekijken</Link></button>
                                        </div>
                                    </div>
                                    <div className="myPostButtons">
                                        <div className="myBlogButtonContainer">
                                            <button className="simpleButtonsEdit buttonYellowEdit">  <Link
                                                to={`/blogEdit/${post.id}`}
                                                className="post-link"
                                                // onClick={handleLinkClick}
                                            >
                                                Blog aanpassen
                                            </Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="onTopOfImageBox">
                                    <div>
                                        <h2 className="post-title">{post.title}</h2>
                                        <p>Geschreven door <strong>{post.username.charAt(0).toUpperCase() + post.username.slice(1)}</strong></p>
                                        <i>{post.date}</i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>


</>
);
}

export default MyExcursions;