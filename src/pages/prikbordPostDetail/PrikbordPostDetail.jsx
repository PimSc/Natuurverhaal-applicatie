import './PrikbordPostDetail.css';
import {Link, useParams} from "react-router-dom";
import PrikbordPosts from "../../constants/PrikbordPosts.json";
import formatDateString from "../../helpers/formatDateString.js";
import {CaretLeft, Clock} from "@phosphor-icons/react";

function PrikbordPostDetail() {
    const { id } = useParams();

    const { title, readTime, subtitle, author, created, content, comments, shares } = PrikbordPosts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="textContainer">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                        <span className="post-detail-read-time">
                        <p> <Clock color="#50535C" size={18} /> Leestijd {readTime} minuten</p>
                    </span>
                        <br/>
                        <p>{content}</p>
                        <p>{comments} reacties - {shares} keer gedeeld</p>

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