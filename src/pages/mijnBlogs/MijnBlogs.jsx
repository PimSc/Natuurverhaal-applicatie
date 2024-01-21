import './MijnBlogs.css';
import BlogOverview from "../../components/blogOverview/BlogOverview.jsx";
// import BlogCounter from "../../components/blogCounter/Blogcounter.jsx";

function MijnBlogs() {

    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">

                    <button className="SimpleButtons" id="WriteBlogButton" type="submit" onClick="">
                        <strong>Blog schrijven</strong>
                    </button>

                    <br/>
                    <h1>Mijn blogs</h1>
                    <BlogOverview />


                </div>
            </div>
        </>
    );
}

export default MijnBlogs;