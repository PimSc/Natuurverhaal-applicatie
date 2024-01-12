import './BlogCounter.css';
import posts from "../../constants/Blogs.json";

function BlogCounter() {
    {/*blogEdit counter*/}
    const totalPosts = posts.length;


return (
<>
    {/*blogEdit counter*/}
    <h4 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h4>
</>
);
}

export default BlogCounter;