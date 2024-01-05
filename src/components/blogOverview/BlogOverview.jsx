import React from 'react';
import './BlogOverview.css';
import posts from "../../constants/data.json";
import { Link } from "react-router-dom";

function BlogOverview() {


    // This code converts \n into <br />
    const convertNewlinesToBr = (text) => {
        return text.split('\n').map((item, key) => (
            <React.Fragment key={key}>
                {item}
                <br />
            </React.Fragment>
        ));
    };



    return (
        <>
            <section className="blogOverviewSection outer-content-container">

                {/*standard inner container (Row)*/}
                <div className="inner-content-container">

                    {/*post-list Flexbox (clumn)*/}
                    <ul className="post-list">
                        {posts.map((post) => (
                            <li key={post.id} className="post-item">
                                <h2>
                                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p>Geschreven door {post.author}</p>
                                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                                <br/>
                                <div className="post-content">
                                    {convertNewlinesToBr(post.content)}
                                </div>
                            </li>
                        ))}
                    </ul>  {/*END post-list Flexbox (clumn)*/}
                </div>
            </section>
        </>
    );
}


// Code zonder javascript
// <section className="blogOverviewSection outer-content-container">
//     <div className="inner-content-container">
//         <ul className="post-list">
//             {posts.map((post) => (
//                 <li key={post.id} className="post-item">
//                     <h2 className="post-title">
//                         <Link to={`/posts/${post.id}`}>{post.title}</Link>
//                     </h2>
//                     <p>Geschreven door {post.author}</p>
//                     <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
//                 </li>
//             ))}
//         </ul>
//     </div>
// </section>


export default BlogOverview;


