import './ExcursionOverview.css';
import {Link} from "react-router-dom";
import calendarIcon from "./../../../public/assets/icons/calendar-icon.png";
import clockIcon from "./../../../public/assets/icons/clock-icon.png";
import locationIcon from "./../../../public/assets/icons/location-icon.png";
import animalIcon from "./../../../public/assets/icons/animal-icon.png";
import guideIcon from "./../../../public/assets/icons/guide-icon.png";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import moneyIcon from "../../../public/assets/icons/money-icon.png";
import React, {useEffect, useRef, useState} from "react";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";


function ExcursionOverview() {
    const {excursionsAll} = useAllExcursions();
    const {excursionsIsLoading} = useAllExcursions();

    // ----- Lazy loading start -----
    const [visiblePosts, setVisiblePosts] = useState(3); // Het aantal zichtbare blogposts
    const containerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                window.innerHeight + window.scrollY >= containerRef.current.offsetTop + containerRef.current.clientHeight
            ) {
                // Wanneer de gebruiker de onderkant van de pagina bereikt, voeg 3 extra posts toe
                setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ----- Lazy loading end -----

    // Loading gif
    if (excursionsIsLoading) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            {excursionsAll.length > 0 && (
                <div className="outer-content-container" ref={containerRef}>
                    <div className="inner-content-container-column">

                        {excursionsAll.slice(0, visiblePosts).map((post) => (
                            <Link to={`/excursiePosts/${post.id}`} key={post.id}>
                                <section>
                                    <div className="excursionPostContainer">
                                        <div className="excursionImageBox">
                                            <img className="blogDetailImage"
                                                 src={"data:image/png;base64," + post.fileContent}
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
                                                <div className="excursionOverviewListInnerContainer textStart">
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
                                                                    alt="dier-icoon"/> {post.guide}
                                                        </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Link>
                        ))}

                    </div>
                </div>
            )}
            {excursionsAll.length === 0 && (
                <div><center>Er zijn geen excursies gevonden.</center></div>
            )}
        </>
    );
}

export default ExcursionOverview;
