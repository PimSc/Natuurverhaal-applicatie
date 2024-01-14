import './PrikbordPostDetail.css';
import {Link, useParams} from "react-router-dom";
import PrikbordPosts from "../../constants/PrikbordPosts.json";
import formatDateString from "../../helpers/formatDateString.js";
import {Clock} from "@phosphor-icons/react";

function PrikbordPostDetail() {
    const { id } = useParams();

    const { title, readTime, subtitle, author, created, content, } = PrikbordPosts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="textCenter">

                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p>Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                        <p> <Clock color="#50535C" size={18} /> Leestijd {readTime} minuten</p>

                        <br/>
                        <p className="textCenter">{content}</p>
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