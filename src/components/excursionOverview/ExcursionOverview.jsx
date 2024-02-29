import './ExcursionOverview.css';
import {Link} from "react-router-dom";
import excursies from '../../constants/ExcursiePosts.json';

import calendarIcon from "./../../../public/assets/icons/calendar-icon.png";
import clockIcon from "./../../../public/assets/icons/clock-icon.png";
import locationIcon from "./../../../public/assets/icons/location-icon.png";
import animalIcon from "./../../../public/assets/icons/animal-icon.png";
import guideIcon from "./../../../public/assets/icons/guide-icon.png";
import plusIcon from "./../../../public/assets/icons/plus-icon.png";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function ExcursionOverview() {
    const {user} = useContext(AuthContext);
    const {ExcursionsAll} = useAllExcursions();


    return (
        <>


            <div className="inner-excursionContent-container">
                {ExcursionsAll.map((post) => (
                    <Link to={`/excursiePosts/${post.id}`} key={post.id}>

                        <div className="excursieContentBox excursie-post-item">

                            <div className="excursieBox1">
                                <div className="excursieImageBox">
                                    <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                                         alt={post.caption}/>
                                </div>
                            </div>


                            <li className="excursionContentTextCenter">
                                <div className="textStart">

                        <span className="textCenter">
                    <h2>{post.title}</h2>
                        </span>

                                    <br/>
                                    <p>
                                        <img className="iconSmall" src={calendarIcon}
                                             alt="kalender icoon"/> {' '} {post.activityDate}{' '}
                                        <img className="iconSmall" src={clockIcon}
                                             alt="klok icoon"/> {' '} {post.activityTime} {' '} {post.price}{' '}
                                    </p>

                                    <p>
                                        <img className="iconSmall" src={locationIcon}
                                             alt="locatie icoon"/> {post.location}
                                    </p>

                                    <p>
                                        <img className="iconSmall" src={animalIcon}
                                             alt="dier-icoon"/> {' '} {post.subject} {' '}
                                        <img className="iconSmall" src={guideIcon}
                                             alt="gids-icoon"/> {' '} {post.guide} {' '}
                                        <img className="iconSmall" src={plusIcon} alt="plus-icoon"/> {' '} {post.niveau}
                                    </p>
                                    <br/>
                                    <div className="textCenter">
                                        <h4>{post.subtitle}</h4>
                                    </div>
                                    <br/>
                                </div>
                            </li>
                        </div>
                    </Link>
                ))}

            </div>


        </>
    );
}

export default ExcursionOverview;
