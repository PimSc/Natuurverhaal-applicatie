import './ExcursionOverview.css';
import { Link } from "react-router-dom";
import excursies from "../../constants/Excursies.json";
import calendarIcon from "./../../assets/icons/calendar-icon.png";
import clockIcon from "./../../assets/icons/clock-icon.png";
import locationIcon from "./../../assets/icons/location-icon.png";
import animalIcon from "./../../assets/icons/animal-icon.png";
import guideIcon from "./../../assets/icons/guide-icon.png";
import plusIcon from "./../../assets/icons/plus-icon.png";

function ExcursionOverview() {
    return (
        <>



<div className=".outer-content-container-column">
    {excursies.map((excursie) => (
        <Link to={`/excursies/${excursie.id}`} key={excursie.id}>

            <div className="excursieContentBox post-item">

                <div className="excursieBox1">
                    <div className="excursieImageBox" >
                                <img src={excursie.foto} alt={excursie.caption}/>
                    </div>
                </div>







                <li className="excursionContentTextCenter">
                    <h2>{excursie.titel}</h2>
                    <br />
                    <p>
                        <img className="iconSmall" src={calendarIcon} alt="kalender icoon"/> {' '} {excursie.datum}{' '}
                        <img className="iconSmall" src={clockIcon} alt="klok icoon"/> {' '} {excursie.tijd} {' '} {excursie.prijs}{' '}
                    </p>

                    <p>
                        <img className="iconSmall" src={locationIcon} alt="locatie icoon"/> {excursie.locatie}
                    </p>

                    <p>
                        <img className="iconSmall" src={animalIcon} alt="dier-icoon"/> {' '} {excursie.onderwerp} {' '}
                        <img className="iconSmall" src={guideIcon} alt="gids-icoon"/> {' '} {excursie.gids} {' '}
                        <img className="iconSmall" src={plusIcon} alt="plus-icoon"/> {' '} {excursie.niveau}
                    </p>
                    <br />
                    <h4>{excursie.subtitel}</h4>
                    <br />
                    {/*<hr/>*/}
                </li>


            </div>

        </Link>
    ))}

</div>





        </>
    );
}

export default ExcursionOverview;
