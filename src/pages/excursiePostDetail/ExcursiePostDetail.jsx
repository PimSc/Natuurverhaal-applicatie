import './ExcursiePostDetail.css';
import { Link, useParams } from "react-router-dom";
import ExcursiePosts from '../../constants/ExcursiePosts.json';


function ExcursiePostDetail() {
    const { id } = useParams();

    const { title, currentParticipants, maxParticipants, image, caption, subtitle, content, comments, shares } = ExcursiePosts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
                <section className="outer-content-container">
                    <div className="inner-content-container-column">

                        <div className="excursieDetailImageOuterBox">
                            <p><img  src={image} alt={caption}/></p>
                           <p><img  src="../../assets/websiteImages/squirrelPhoto.jpg" alt="eekhoorn 2" /></p>
                            <p><img src="src/assets/websiteImages/squirrelPhoto.jpg" alt="eekhoorn 3"/></p>
                    </div>

                        {/*className="excursieDetailImage"*/}


                        <br/>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p>Aantal ingeschreven deelnemers: {currentParticipants} maximaal aantal deelnemers: {maxParticipants}</p>

                            <span className="post-detail-read-time">
                            </span>
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