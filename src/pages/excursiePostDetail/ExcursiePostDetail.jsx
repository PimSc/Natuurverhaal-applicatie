import './ExcursiePostDetail.css';
import { Link, useParams } from "react-router-dom";
import excursies from '../../constants/ExcursiePosts.json';

function ExcursiePostDetail() {
    const { id } = useParams();
    const matchingPosts = excursies.filter((post) => post.id.toString() === id);

    if (!matchingPosts.length) {
        window.location.replace("/Excursies");
        return null;
    }


    return (
        <>
            {matchingPosts.map((excursie) => (
                <section key={excursie.id} className="outer-content-container">
                    <div className="inner-content-container-column">

                        <div className="excursieDetailImageOuterBox">
                            {/*<img className="excursieDetailImage" src={excursie.image} alt={excursie.caption} />*/}
                           <p><img className="excursieDetailImage" src="../../assets/websiteImages/squirrelPhoto.jpg" alt="voorbeeld" /></p>
                    </div>


                        <br/>
                        <h1>{excursie.title}</h1>
                        <h2>{excursie.subtitle}</h2>
                        <p>Aantal ingeschreven deelnemers: {excursie.currentParticipants} maximaal aantal deelnemers: {excursie.maxParticipants}</p>

                            <span className="post-detail-read-time">
              </span>
                            <br/>
                            <p>{excursie.content}</p>
                            <p>{excursie.comments} reacties - {excursie.shares} keer gedeeld</p>

                            <Link to="/Excursies" className="back-link">
                                <br/>
                                <button className="SimpleButtons"> Terug naar de excursie pagina</button>
                                <br/>
                                <br/>
                            </Link>

                        </div>
                </section>
            ))}
        </>
    );
}

export default ExcursiePostDetail;