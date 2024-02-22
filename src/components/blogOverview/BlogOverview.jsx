import React, {useContext, useEffect, useState} from 'react';
import './BlogOverview.css';
import { Link } from 'react-router-dom';
import SearchContext from "../../context/SearchContext.jsx";
import useBlog from "../../Hooks/useBlogAll.jsx";


function BlogOverview() {


    const {searchQuery, setSearchQuery, handleChange} = useContext(SearchContext);
    const { blogPostsAll } = useBlog();

    const [filteredPosts, setFilteredPosts] = useState(blogPostsAll);

    useEffect(() => {
        const filtered = blogPostsAll.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchQuery, blogPostsAll]);



    return (
        <>

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
                                            <p>Geschreven door {post.username}</p>
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














//
//
//
// import React, { useState, useEffect } from 'react';
// import './BlogOverview.css';
// import useBlog from "../../Hooks/useBlogAll.jsx";
// import { Link } from 'react-router-dom';
//
// function BlogOverview() {
//     const { blogPostsAll } = useBlog();
//     const [searchTerm, setSearchTerm] = useState('');
//     // Initialiseer filteredPosts met de blogposts
//     const [filteredPosts, setFilteredPosts] = useState(blogPostsAll);
//
//     console.log(blogPostsAll)
//
//     const handleChange = (event) => {
//         const newSearchTerm = event.target.value;
//         setSearchTerm(newSearchTerm);
//
//         // Filter de blogposts
//         const filtered = blogPostsAll.filter(post =>
//             post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.subtitle.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.content.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.username.toLowerCase().includes(newSearchTerm.toLowerCase())
//         );
//         setFilteredPosts(filtered);
//     };
//
//     // Update filteredPosts wanneer blogPosts verandert
//     useEffect(() => {
//         setFilteredPosts(blogPostsAll);
//     }, [blogPostsAll]);
//
//     return (
//         <>
//             {/*<div className="elementCenterContainer" id="searchbarBlogOvervieuw">*/}
//             {/*    <form>*/}
//             {/*        <input*/}
//             {/*            className="searchBar"*/}
//             {/*            type="text"*/}
//             {/*            name="query"*/}
//             {/*            placeholder="Zoek..."*/}
//             {/*            value={searchTerm}*/}
//             {/*            onChange={handleChange}*/}
//             {/*        />*/}
//             {/*    </form>*/}
//             {/*</div>*/}
//             <section className="outer-content-container">
//                 <div className="inner-content-container">
//                     <ul className="post-list">
//                         {filteredPosts.map((post) => (
//                             <li key={post.id} className="blog-post-item ">
//                                 <Link to={`/blogposts/${post.id}`} className="post-link">
//                                     <div className="post-image"
//                                          style={{backgroundImage: `url(${"data:image/png;base64," + post.fileContent})`}}>
//                                         <div className="onTopOfImageBox">
//                                             <h2 className="post-title">{post.title}</h2>
//                                             {/*<p>Geschreven door <strong>{post.author}</strong></p>*/}
//                                             <p>Geschreven door {post.username}</p>
//                                             <i>{post.date}</i>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>
//         </>
//     );
// }
//
// export default BlogOverview;