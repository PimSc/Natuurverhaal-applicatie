import './ExcursionOverview.css';
import {Link} from "react-router-dom";
import calendarIcon from "./../../../public/assets/icons/calendar-icon.png";
import clockIcon from "./../../../public/assets/icons/clock-icon.png";
import locationIcon from "./../../../public/assets/icons/location-icon.png";
import animalIcon from "./../../../public/assets/icons/animal-icon.png";
import guideIcon from "./../../../public/assets/icons/guide-icon.png";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import moneyIcon from "../../../public/assets/icons/money-icon.png";


function ExcursionOverview() {
    const {ExcursionsAll} = useAllExcursions();

    return (
        <>
            <article className="outer-content-container">
                <div className="inner-content-container-column">

                    {ExcursionsAll.map((post) => (
                        <Link to={`/excursiePosts/${post.id}`} key={post.id}>

                            <div className="excursionPostContainer">

                                <div className="excursionImageBox">
                                    <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                                         alt={post.caption}/>
                                </div>

                                <div className="excursionOverviewTextContainer1">
                                    <div className="excursionOverviewPostTitleContainer">
                                        <div className="textStart">
                                            <h1>{post.title}</h1>
                                            <h4>{post.subtitle}</h4>
                                        </div>
                                    </div>

                                    <div className="excursionOverviewListOuterContainer">
                                        <div className="excursionOverviewListInnerContainer">
                                            <ul>
                                                {/*Date*/}
                                                <li><p><img className="iconSmall" src={calendarIcon}
                                                            alt="kalender icoon"/> {post.activity_date}</p></li>
                                                {/*Time*/}
                                                <li><p><img className="iconSmall" src={clockIcon}
                                                            alt="klok icoon"/> {post.activity_time}</p></li>

                                                {/*Location*/}
                                                <li><p><img className="iconSmall" src={locationIcon}
                                                            alt="locatie icoon"/> {post.location}</p></li>
                                            </ul>
                                        </div>
                                        <div className="excursionOverviewListInnerContainer">
                                            <ul>
                                                {/*Subject*/}
                                                <li><p><img className="iconSmall" src={animalIcon}
                                                            alt="dier-icoon"/> {post.subject}</p></li>

                                                {/*Price*/}
                                                <li><p><img className="iconSmall" src={moneyIcon}
                                                            alt="geld icoon"/> {post.price}</p></li>

                                                {/*Guide*/}
                                                <li><p><img className="iconSmall" src={guideIcon}
                                                            alt="dier-icoon"/><Link
                                                    to={`/ProfileDetail/${post.guide.toLowerCase()}`}>{post.guide}</Link>
                                                </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </article>


        </>
    );
}

export default ExcursionOverview;
