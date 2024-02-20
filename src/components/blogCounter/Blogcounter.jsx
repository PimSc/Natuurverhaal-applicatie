import './BlogCounter.css';
import useBlog from "../../Hooks/useBlogAll.jsx";

function BlogCounter() {

    const { blogPostsAll } = useBlog();


    {/*blogEdit counter*/}
    const totalPosts = blogPostsAll.length;


return (
<>
    {/*blogEdit counter*/}
    <h4 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h4>
</>
);
}

export default BlogCounter;