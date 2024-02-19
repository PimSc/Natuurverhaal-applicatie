import { useState } from 'react';
import './BlogOverview.css';
import useBlog from "../../Hooks/useBlog.jsx";
import { Link } from 'react-router-dom';
import image from './../../../public/assets/blogPostImages/wolfPhoto.jpg';


function BlogOverview() {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [filteredPosts, setFilteredPosts] = useState(posts);
    //
    //
    const {blogPosts} = useBlog();
    //
    // const handleChange = (event) => {
    //     const newSearchTerm = event.target.value;
    //     setSearchTerm(newSearchTerm);
    //
    //     const filtered = posts.filter(post =>
    //         post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
    //         post.subtitle.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
    //         post.content.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
    //         post.author.toLowerCase().includes(newSearchTerm.toLowerCase())
    //     );
    //     setFilteredPosts(filtered);
    // };

    return (
        <>
            <div className="elementCenterContainer" id="searchbarBlogOvervieuw">
                <form>
                    <input
                        className="searchBar"
                        type="text"
                        name="query"
                        placeholder="Zoek..."
                        // value={searchTerm}
                        // onChange={handleChange}
                    />
                </form>
            </div>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <ul className="post-list">
                        {blogPosts.map((post) => (
                            <li key={post.id} className="blog-post-item ">
                                {/*<Link to={`/blogposts/${post.id}`} className="post-link">*/}
                                {/*<div className="post-image" style={{ backgroundImage: `url(${post.image})` }}>*/}
                                <Link to={`/blogposts/${post.id}`} className="post-link">
                                    <div className="post-image" style={{ backgroundImage: `url(${image})` }}>
                                <div className="onTopOfImageBox">
                                    <h2 className="post-title">{post.title}</h2>
                                    <h4>{post.subtitle}</h4>
                                    {/*{post.content}*/}
                                    {/*<p>Geschreven door <strong>{post.author}</strong></p>*/}
                                    {/*<i>{post.created}</i>*/}
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








// import { useState } from 'react';
// import './BlogOverview.css';
// import posts from '../../constants/BlogPosts.json';
// import { Link } from 'react-router-dom';
//
// function BlogOverview() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredPosts, setFilteredPosts] = useState(posts);
//
//     const handleChange = (event) => {
//         const newSearchTerm = event.target.value;
//         setSearchTerm(newSearchTerm);
//
//         const filtered = posts.filter(post =>
//             post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.subtitle.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.content.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
//             post.author.toLowerCase().includes(newSearchTerm.toLowerCase())
//         );
//         setFilteredPosts(filtered);
//     };
//
//     return (
//         <>
//             <div className="elementCenterContainer" id="searchbarBlogOvervieuw">
//                 <form>
//                     <input
//                         className="searchBar"
//                         type="text"
//                         name="query"
//                         placeholder="Zoek..."
//                         value={searchTerm}
//                         onChange={handleChange}
//                     />
//                 </form>
//             </div>
//             <section className="outer-content-container">
//                 <div className="inner-content-container">
//                     <ul className="post-list">
//                         {filteredPosts.map((post) => (
//                             <li key={post.id} className="blog-post-item ">
//                                 <Link to={`/blogposts/${post.id}`} className="post-link">
//                                     <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}>
//                                         <div className="onTopOfImageBox">
//                                             <h2 className="post-title">{post.title}</h2>
//                                             <p>Geschreven door <strong>{post.author}</strong></p>
//                                             <i>{post.created}</i>
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
