import './ExcursiePostDetail.css';
import { Link, useParams } from "react-router-dom";
import ExcursiePosts from '../../constants/ExcursiePosts.json';
import {useEffect} from "react";

function ExcursiePostDetail() {
    const { id } = useParams();

    const { title, currentParticipants, maxParticipants, image, caption, subtitle, content, comments, shares } = ExcursiePosts.find((post) => {
        return post.id.toString() === id;
    });

    useEffect(() =>{
        console.log(image)


    },[image])

    return (
        <>
                <section className="outer-content-container">
                    <div className="inner-content-container-column">

                    <div className="excursionDetailImageContainer">
                            <img  src={image} alt={caption}/>

                    </div>


                        <br/>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p>Aantal ingeschreven deelnemers: {currentParticipants} maximaal aantal deelnemers: {maxParticipants}</p>

                            <br/>
                            <p className="textStart">{content}</p>
                            <br/>
                            <p>{comments} reacties - {shares} keer gedeeld</p>

                            <Link to="/Excursies" className="back-link">
                                <br/>
                                <button className="SimpleButtons"> Terug naar de excursie pagina</button>
                                <br/>
                                <br/>
                            </Link>

                        </div>
                </section>
            )
        </>
    );
}

export default ExcursiePostDetail;