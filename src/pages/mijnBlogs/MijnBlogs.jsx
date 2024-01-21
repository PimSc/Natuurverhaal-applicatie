import './MijnBlogs.css';
import BlogOverview from "../../components/blogOverview/BlogOverview.jsx";
import {Link} from "react-router-dom";


// import BlogCounter from "../../components/blogCounter/Blogcounter.jsx";

function MijnBlogs() {


    return (
        <>
            <div className="inner-content-container-textFields">

            <button className="SimpleButtons" id="WriteBlogButton" type="button">
                <Link to="/WriteBlog"><strong>Blog schrijven</strong></Link>
            </button>

<h1 id="myBlogsTitleStyling">Mijn blogs overzicht</h1>

                <BlogOverview/>
            </div>
        </>
    );
}

export default MijnBlogs;




