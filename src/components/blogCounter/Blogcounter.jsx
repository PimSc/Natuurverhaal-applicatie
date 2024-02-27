import './BlogCounter.css';
import useBlog from "../../Hooks/useAllBlogs.jsx";

function BlogCounter() {

    const { blogPostsAll } = useBlog();


    {/*blogPostEdit counter*/}
    const totalPosts = blogPostsAll.length;


return (
<>
    {/*blogPostEdit counter*/}
    <h4 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h4>
</>
);
}

export default BlogCounter;