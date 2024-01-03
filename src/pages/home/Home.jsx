import './Home.css'
import BlogOverview from "../../components/blogOverview/BlogOverview.jsx";
import BlogCounter from "../../components/blogCounter/Blogcounter.jsx";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <>


            <BlogCounter />
            <BlogOverview />




        </>
    )
}

export default Home