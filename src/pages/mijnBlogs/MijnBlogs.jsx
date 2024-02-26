import React, {useContext, useEffect, useState} from 'react';
import './MijnBlogs.css';
import useBlog from "../../Hooks/useUserBlogs.jsx";
import {Link} from "react-router-dom";
import SearchContext from "../../context/SearchContext.jsx";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";


function MijnBlogs() {
    //Hier komen alle blogs van de ingelogde user binnen uit de Hook
    const {blogPostsUser} = useBlog();

    //Telt hoeveel blogs de user heeft
    const totalPosts = blogPostsUser.length;

    //Hier komt de zoekterm uit de zoekbalk binnen
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    // Filter en keer de blogposts om
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const filtered = blogPostsUser.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const reversedFilteredPosts = filtered.slice().reverse();
        setFilteredPosts(reversedFilteredPosts);
    }, [searchQuery, blogPostsUser]);


    // const {user} = useContext(AuthContext);
    // const handleDelete = () => {
    //     axios.delete(`http://blog-posts/${user.username}/${post.id}`)
    //         .then(response => {
    //             // Handle success, maybe show a message or update state
    //             console.log('Post deleted successfully');
    //         })
    //         .catch(error => {
    //             // Handle error, maybe show an error message
    //             console.error('Error deleting post:', error);
    //         });
    // };

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <button id="WriteBlogButton" type="button">
                        <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
                    </button>
                    <h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>
                    <p id="myBlogsSubTitleStyling"> Hier kan je je blogs bewerken en verwijderen</p>
                    <h4 className="totalBlogsCounter">Je hebt al {totalPosts} natuurblogs</h4>
                    <br/>
                </div>
            </section>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="myPostList">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="myBlogPostItem">

                                {/*<Link to={`/blogposts/${post.id}`} className="post-link">*/}

                                <div className="myPostImg"
                                     style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>


                                    {/*--REMOVE BLOG--*/}
                                    <div className="myBlogsOnTopButtonContainer">
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="SimpleButtonsRemove buttonRedRemove">
                                                    <Link to={`/blogposts/${post.id}`} className="post-link">Blog
                                                        verwijderen</Link>
                                                </button>
                                            </div>
                                        </div>

                                        {/*--READ BLOG--*/}
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="SimpleButtonsTotalGreen myBlogButton"><Link
                                                    to={`/blogposts/${post.id}`} className="post-link">Blog
                                                    bekijken</Link></button>
                                            </div>
                                        </div>

                                        {/*--EDIT BLOG--*/}
                                        <div className="myPostButtons">
                                            <div className="myBlogButtonContainer">
                                                <button className="SimpleButtonsEdit buttonYellowEdit"><Link
                                                    to="/contact"> Blog aanpassen</Link></button>
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
                                {/*</Link>*/}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </>
    );
}

export default MijnBlogs;
