import './ExcursiePostDetail.css';
import {Link, useParams} from "react-router-dom";
import ExcursiePosts from '../../constants/ExcursiePosts.json';
import {useEffect} from "react";
import animalIcon from "../../../public/assets/icons/animal-icon.png";
import guideIcon from "../../../public/assets/icons/guide-icon.png";
import plusIcon from "../../../public/assets/icons/plus-icon.png";
import locationIcon from "../../../public/assets/icons/location-icon.png";
import calendarIcon from "../../../public/assets/icons/calendar-icon.png";
import clockIcon from "../../../public/assets/icons/clock-icon.png";

function ExcursiePostDetail() {
    const {id} = useParams();

    const {
        title,
        currentParticipants,
        maxParticipants,
        image,
        caption,
        subtitle,
        content,
        subject,
        guide,
        niveau,
        location,
        activityTime,
        price,
        activityDate
    } = ExcursiePosts.find((post) => {
        return post.id.toString() === id;
    });

    useEffect(() => {
        console.log(image)


    }, [image])

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">


                    <div className="excursionDetailImageContainer">
                        <img src={image} alt={caption}/>

                    </div>


                    <br/>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>
                        <img className="iconSmall" src={calendarIcon} alt="kalender icoon"/> {' '} {activityDate}{' '}
                        <img className="iconSmall" src={clockIcon} alt="klok icoon"/> {' '} {activityTime} {' '} {price}{' '}
                    </p>
                    <p>
                        <img className="iconSmall" src={locationIcon} alt="locatie icoon"/> {location}
                    </p>
                    <p>
                        <img className="iconSmall" src={animalIcon} alt="dier-icoon"/> {' '} {subject} {' '}
                        <img className="iconSmall" src={guideIcon} alt="gids-icoon"/> {' '} {guide} {' '}
                        <img className="iconSmall" src={plusIcon} alt="plus-icoon"/> {' '} {niveau}
                    </p>


                    <br/>
                    <p className="textStart">{content}</p>
                    <br/>


                    <p>Aantal ingeschreven deelnemers: {currentParticipants} maximaal aantal
                        deelnemers: {maxParticipants}</p>

                    <form action="">
                        <div className="textCenter">
                            <h1>Inschrijven</h1>
                        </div>

                        <label className="textStart" htmlFor="title">
                            <b>Naam:</b>
                        </label>
                        <input className="textAreaOneLine"
                               name="title"
                               id="title"
                               autoComplete="on"
                               required
                        />


                        <label className="textStart" htmlFor="content">
                            <b>Email:</b>
                        </label>
                        <input className="textAreaOneLine"
                               type="email"
                               name="content"
                               id="content"
                               autoComplete="on"
                               required
                        />
                        <div className="buttonCenter">
                           <button className="SimpleButtons"> Inschrijven voor excursie <strong>{title}</strong></button>
                        </div>
                    </form>


                    <Link to="/Excursies" className="back-link">
                        <button className="SimpleButtons"> Terug naar de excursie pagina</button>
                    </Link>


                </div>
            </section>
            )
        </>
    );
}

export default ExcursiePostDetail;