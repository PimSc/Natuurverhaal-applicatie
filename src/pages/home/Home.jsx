import './Home.css'
import BlogOverview from "../../components/blogOverview/BlogOverview.jsx";
import {Link} from "react-router-dom";
// import bearPhoto from "../../../public/assets/blogPostImages/bearPhoto.jpg";

// import BlogCounter from "../../components/blogCounter/Blogcounter.jsx";


function Home() {
    return (
        <>
    <div className="textCenter">
            <Link to="/testpage"><button>test page1</button></Link>
        </div>
            {/*<img src={bearPhoto} alt="{}"/>*/}

            {/*<BlogCounter />*/}
            <BlogOverview />




        </>
    )
}

export default Home