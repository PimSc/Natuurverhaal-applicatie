import './BlogCounter.css';
import posts from "../../constants/data.json";

function BlogCounter() {
    {/*blogs counter*/}
    const totalPosts = posts.length;


return (
<>
    {/*blogs counter*/}
    <h2 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h2>
</>
);
}

export default BlogCounter;