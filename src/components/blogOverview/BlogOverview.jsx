import './BlogOverview.css';
import posts from "../../constants/data.json";
import {Link} from "react-router-dom";


function BlogOverview() {

return (
<>


    <section className="blogOverviewSection outer-content-container">
        <div className="inner-content-container">
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <h2 className="post-title">
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p>Geschreven door {post.author}</p>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>


    {/*<section className="blogOverviewSection outer-content-container">*/}
    {/*    <div className="inner-content-container">*/}
    {/*        {posts.map((post) => (*/}
    {/*            <div key={post.id}>*/}
    {/*                <h3>*/}
    {/*                    /!*<Link to={`/blogpost/${post.id}`}>{post.title}</Link> ({post.author})*!/*/}
    {/*                </h3>*/}
    {/*                <h2>{post.title}</h2>*/}
    {/*                <p>*/}
    {/*                    {post.comments} reacties - {post.shares} keer gedeeld*/}
    {/*                </p>*/}
    {/*            </div>*/}
    {/*        ))}*/}
    {/*    </div>*/}
    {/*</section>*/}






    {/*    <div className="inner-content-container">*/}
    {/*        /!*<h1>Bekijk alle {posts.length} posts op het platform</h1>*!/*/}
    {/*        <h1>Bekijk alle INFO posts op het platform</h1>*/}

    {/*        <ul className="post-list">*/}
    {/*            /!*{posts.map((post) => {*!/*/}
    {/*            /!*    return <li key={post.id} className="post-item">*!/*/}
    {/*            /!*        <h2 className="post-title"><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</h2>*!/*/}
    {/*            /!*        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>*!/*/}
    {/*            <h2>iets met posts</h2>*/}
    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta fuga laborum molestias optio quam quas reiciendis. Accusantium, distinctio, minus!</p>*/}
    {/*            /!*    </li>*!/*/}
    {/*            /!*})}*!/*/}
    {/*        </ul>*/}
    {/*    </div>*/}
    {/*    */}








</>
);
}

export default BlogOverview;