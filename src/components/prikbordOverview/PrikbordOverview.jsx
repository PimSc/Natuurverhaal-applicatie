import './PrikbordOverview.css';
import PrikbordPosts from "../../constants/PrikbordPosts.json";
import { useContext } from 'react';
import { Link } from "react-router-dom";
// import { AuthContextData } from "../../context/AuthContextProvider";

function PrikbordOverview() {

    // const { userRoles, isAuthenticated } = useContext(AuthContextData);
    //
    // if (!isAuthenticated) {
    //     return (<p>Je moet ingelogd zijn om deze pagina te bezoeken.</p>)
    // }
    //
    // const allowedRoles = ['ROLE_ADMIN']
    // if (!userRoles.some(x => allowedRoles.includes(x))) {
    //     return (<p>Je hebt geen rechten om deze pagina te bekijken.</p>)        
    // }

    return (
        <>
            <section className="blogOverviewSection outer-content-container">
                <div className="inner-content-container-column">

                    <div className="prikbordTextMargin textCenter">
                    <h1>Prikbord</h1>
                    <p>Hier kan je een oproep doen aan alle gebruikers. <br/> Je kan bijvoorbeeld een opzoek doen voor het vinden van een reismaatje, <br/> je camera te koop aanbieden of advies vragen hoe je het beste insecten kan fotogrageren. </p>
                </div>

                    <ul className="post-list">
                        {PrikbordPosts.map((post) => (
                            <li key={post.id} className="post-item">
                                <Link to={`/prikbordPosts/${post.id}`} className="post-link">
                                    <h2 className="post-title">{post.title}</h2>
                                    <p>Auteur:  {post.author}</p>
                                    <i className="iGrey">Datum - {post.created}</i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default PrikbordOverview;