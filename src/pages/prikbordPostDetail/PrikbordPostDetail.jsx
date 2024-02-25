import './PrikbordPostDetail.css';
import {Link, useParams} from "react-router-dom";
import PrikbordPosts from "../../constants/PrikbordPosts.json";
import formatDateString from "../../helpers/formatDateString.jsx";

function PrikbordPostDetail() {
    const { id } = useParams();

    const { title, subtitle, author, created, content, } = PrikbordPosts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="textCenter">

                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p>Geschreven door <em>{author.charAt(0).toUpperCase() + author.slice(1)}</em> op {formatDateString(created)}</p>
                        {/*<p> <Clock color="#50535C" size={18} /> Leestijd {readTime} minuten</p>*/}

                        <br/>
                        <p className="textStart">{content}</p>
                        <Link to="/prikbord" className="back-link">
                            <br/>
                            <button className="SimpleButtons"> Terug naar het prikbord overzicht</button>
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