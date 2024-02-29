import './ExcursiePostDetail.css';
import {Link, useParams} from "react-router-dom";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import animalIcon from "../../../public/assets/icons/animal-icon.png";
import guideIcon from "../../../public/assets/icons/guide-icon.png";
import locationIcon from "../../../public/assets/icons/location-icon.png";
import calendarIcon from "../../../public/assets/icons/calendar-icon.png";
import clockIcon from "../../../public/assets/icons/clock-icon.png";
import moneyIcon from "../../../public/assets/icons/money-icon.png";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";

function ExcursiePostDetail() {
    const {id} = useParams();
    const {ExcursionsAll} = useAllExcursions();
    const post = ExcursionsAll.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID

    console.log("ExcursionsAll", ExcursionsAll)

    if (!post) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }


    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <div className="excursionDetailInnerContainer">
                        <>

                            <div className="excursionDetailImageContainer">
                                <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                                     alt={post.caption}/>
                            </div>


                            <br/>
                            <hr/>
                            <br/>

                            <h1>{post.title}</h1>
                            <h4 className="textCenter">{post.subtitle}</h4>

                            <br/>

                            <ol className="excursionsActivityDetailText">

                                {/*Date*/}
                                <li><p><img className="iconSmall" src={calendarIcon}
                                            alt="kalender icoon"/> {post.activity_date}</p></li>

                                {/*Time*/}
                                <li><p><img className="iconSmall" src={clockIcon} alt="klok icoon"/> {post.activity_time}</p></li>

                                {/*Price*/}
                                <li><p><img className="iconSmall" src={moneyIcon} alt="geld icoon"/> {post.price}</p></li>

                                {/*Location*/}
                                <li><p><img className="iconSmall" src={locationIcon}
                                            alt="locatie icoon"/> {post.location}</p></li>

                                {/*Subject*/}
                                <li><p><img className="iconSmall" src={animalIcon} alt="dier-icoon"/> {post.subject}</p>
                                </li>

                                {/*Guide*/}
                                <li><p><img className="iconSmall" src={guideIcon} alt="dier-icoon"/><Link
                                    to={`/ProfileDetail/${post.guide.toLowerCase()}`}>{post.guide}</Link></p></li>
                            </ol>

                            <br/>
                            <hr/>


                            <br/>
                            <p className="textStart">{post.content}</p>
                            <br/>


                            <p>Maximaal aantal deelnemers: {post.max_participants}</p>

                            <form action="">
                                <div className="textCenter" id="topMarginDeelnemen">
                                    <h2>Deelnemen</h2>
                                </div>

                                <div className="textCenter">
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
                                </div>
                                {/*<div className="buttonCenter">*/}
                                {/*   <button className="simpleButtons"> Inschrijven voor excursie <strong>{post.title}</strong></button>*/}
                                {/*</div>*/}
                            </form>


                            <Link to="/Excursies" className="back-link">
                                <button className="simpleButtons"> Terug naar de excursie pagina</button>
                            </Link>
                        </>
                    </div>
                </div>
            </section>
            )
        </>
    );
}

export default ExcursiePostDetail;