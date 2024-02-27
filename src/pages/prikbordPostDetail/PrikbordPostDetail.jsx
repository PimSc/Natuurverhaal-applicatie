import './PrikbordPostDetail.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import useBlog from "../../Hooks/useAllBulletinBoards.jsx";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";
import React from "react";

function PrikbordPostDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Haal het ID uit de URL-parameters
    const { bulletinBoardsAll } = useBlog();
    const post = bulletinBoardsAll.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID

    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };


    if (!post) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>

                <section className="outer-content-container-column">
                    <img className="blogDetailImageHeader" src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>
                    <div className="inner-content-container" >
                        <div className="textCenter">


                            <h1>{post.title}</h1>
                            <p><Link to={`/ProfileDetail/${post.username}`}>Geschreven
                                door {post.username.charAt(0).toUpperCase() + post.username.slice(1)} </Link></p>
                            <i>{post.date}</i>
                            <div className="textStart">
                            </div>
                            <br/>
                            <p className="textStart">{post.content}</p>
                            <br/>
                            <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                                 alt={post.caption}/>
                            <br/>

                            <Link to={`/ProfileDetail/${post.username}`}><strong>Bezoek de profiel pagina
                                van {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</strong> </Link>

                            <Link to="/" className="back-link">
                                <br/>
                                <button className="simpleButtons" onClick={handleTerugClick}> Terug naar de vorige
                                    pagina
                                </button>
                                <br/>
                                <br/>
                            </Link>

                        </div>
                    </div>
                </section>



        </>
    );
}

export default PrikbordPostDetail;