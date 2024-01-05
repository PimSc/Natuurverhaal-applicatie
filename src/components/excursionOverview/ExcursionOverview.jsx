import './ExcursionOverview.css';
import { Link } from "react-router-dom";
import excursies from "../../constants/excursies.json";
import calendarIcon from "./../../assets/icons/calendar-icon.png";
import clockIcon from "./../../assets/icons/clock-icon.png";
import locationIcon from "./../../assets/icons/location-icon.png";
import animalIcon from "./../../assets/icons/animal-icon.png";
import guideIcon from "./../../assets/icons/guide-icon.png";

function ExcursionOverview() {
    return (
        <>

            <div className="containerPim">


            {excursies.map((excursie) => (
                <div key={excursie.id} className="excursieBox1" >
                    <img className="excursieBox1" src={excursie.foto} alt={excursie.caption}/>
                </div>
            ))}

            <div className="excursieBox2">
                {excursies.map((excursie) => (
                    <Link to={`/excursies/${excursie.id}`} key={excursie.id}>
                        <li>
                            <h2>{excursie.titel}</h2>
                            <p> <img className="iconSmall" src={calendarIcon} alt="kalender icoon"/> {excursie.datum} <img className="iconSmall" src={clockIcon} alt="klok icoon"/> {excursie.tijd} {excursie.prijs}</p>

                            <p> <img className="iconSmall" src={locationIcon} alt="locatie icoon"/> {excursie.locatie}  </p>

                            <p><img className="iconSmall"src={animalIcon}alt="dier-icoon icoon"/> {excursie.onderwerp} <img className="iconSmall" src={guideIcon} alt="gids-icoon icoon"/> {excursie.gids}</p>
                            <br/>
                            <h4>{excursie.subtitel}</h4>
                            <br/>
                            <hr/>
                        </li>
                    </Link>
                ))}
            </div>
            </div>

        </>
    );
}

export default ExcursionOverview;
