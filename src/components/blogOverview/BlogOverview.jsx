import './BlogOverview.css';
import posts from "../../constants/data.json";


function BlogOverview() {
    const totalPosts = posts.length;




return (
<>

    <h2 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h2>
    {/*outer-content-container*/}
    <section className="overview-section ">
        {posts.map((post) => (
            <div key={post.id}>
                <h3>
                    {/*<Link to={`/blogpost/${post.id}`}>{post.title}</Link> ({post.author})*/}
                </h3>
                <h2>{post.title}</h2>
                <p>
                    {post.comments} reacties - {post.shares} keer gedeeld
                </p>
            </div>
        ))}
    </section>










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