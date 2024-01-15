import './ExcursionOverview.css';
import {Link} from "react-router-dom";
import excursies from '../../constants/ExcursiePosts.json';

import calendarIcon from "./../../assets/icons/calendar-icon.png";
import clockIcon from "./../../assets/icons/clock-icon.png";
import locationIcon from "./../../assets/icons/location-icon.png";
import animalIcon from "./../../assets/icons/animal-icon.png";
import guideIcon from "./../../assets/icons/guide-icon.png";
import plusIcon from "./../../assets/icons/plus-icon.png";

function ExcursionOverview() {
    return (
        <>



<div className="outer-content-container-column">
    <div className="inner-content-container-column">
    {excursies.map((excursie) => (
        <Link to={`/excursiePosts/${excursie.id}`} key={excursie.id}>

            <div className="excursieContentBox excursie-post-item">

                <div className="excursieBox1">
                    <div className="excursieImageBox" >
                                <img src={excursie.image} alt={excursie.caption}/>
                    </div>
                </div>







                <li className="excursionContentTextCenter">
                    <div className="textStart">
                    <h2>{excursie.title}</h2>
                    <br />
                    <p>
                        <img className="iconSmall" src={calendarIcon} alt="kalender icoon"/> {' '} {excursie.activityDate}{' '}
                        <img className="iconSmall" src={clockIcon} alt="klok icoon"/> {' '} {excursie.activityTime} {' '} {excursie.price}{' '}
                    </p>

                    <p>
                        <img className="iconSmall" src={locationIcon} alt="locatie icoon"/> {excursie.location}
                    </p>

                    <p>
                        <img className="iconSmall" src={animalIcon} alt="dier-icoon"/> {' '} {excursie.subject} {' '}
                        <img className="iconSmall" src={guideIcon} alt="gids-icoon"/> {' '} {excursie.guide} {' '}
                        <img className="iconSmall" src={plusIcon} alt="plus-icoon"/> {' '} {excursie.niveau}
                    </p>
                        <br />
                    <h4>{excursie.subtitle}</h4>
                    <br />
                    </div>
                </li>
            </div>
        </Link>
    ))}

</div>
</div>




        </>
    );
}

export default ExcursionOverview;
