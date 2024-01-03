import './BlogCounter.css';
import posts from "../../constants/data.json";

function BlogCounter() {
    {/*blogs counter*/}
    const totalPosts = posts.length;


return (
<>
    {/*blogs counter*/}
    <h4 className="totalBlogsCounter">Totaal aantal natuurblogs: {totalPosts}</h4>
</>
);
}

export default BlogCounter;