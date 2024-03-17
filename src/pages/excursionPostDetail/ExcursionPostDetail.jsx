import './ExcursionPostDetail.css';
import {Link, useParams} from "react-router-dom";
import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import animalIcon from "../../../public/assets/icons/animal-icon.png";
import guideIcon from "../../../public/assets/icons/guide-icon.png";
import locationIcon from "../../../public/assets/icons/location-icon.png";
import calendarIcon from "../../../public/assets/icons/calendar-icon.png";
import clockIcon from "../../../public/assets/icons/clock-icon.png";
import moneyIcon from "../../../public/assets/icons/money-icon.png";

import {
    EmailIcon,
    EmailShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import React, {useContext, useState} from "react";
import axios from "axios";

function ExcursionPostDetail() {
    const {id} = useParams();
    const {excursionsAll} = useAllExcursions();
    const post = excursionsAll.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID
    const [message, setMessage] = useState('');


    if (!post) {
        return <div>Post niet gevonden.</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = document.getElementById('title').value;
        const email = document.getElementById('content').value;

        const registrationData = {
            name: name,
            email: email,
            excursieId: id, // assuming 'id' is the id of the excursion
        };

        try {
            const token = localStorage.getItem("token")
            const response = await axios.post('http://localhost:8080/registrations', registrationData, {
                headers: {
                    Authorization: `Bearer ${token}`}
                });
            setMessage('Inschrijving gelukt');
        } catch (error) {
            console.error('Error posting data', error);
            setMessage('Inschrijving mislukt');
        }
    };

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">
                    <div className="excursionDetailInnerContainer">


                        <div className="excursionDetailImageContainer">
                            <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                                 alt={post.caption}/>
                        </div>


                        <hr className="margin20PxTop"/>


                        <h1>{post.title}</h1>
                        <h4 className="textCenter">{post.subtitle}</h4>

                        <br/>

                        <ol className="textStart excursionsActivityDetailText">

                            {/*Date*/}
                            <li><p><img className="iconSmall" src={calendarIcon}
                                        alt="kalender icoon"/> {post.activity_date}</p></li>

                            {/*Time*/}
                            <li><p><img className="iconSmall" src={clockIcon} alt="klok icoon"/> {post.activity_time}
                            </p></li>

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


                        <hr className="margin20PxTop"/>


                        <p className="textStart">{post.content}</p>


                        <p className="margin20PxButton">Maximaal aantal deelnemers: {post.max_participants}</p>

                        <form action="" onSubmit={handleSubmit}>
                            <div className="textCenter" id="topMarginDeelnemen">
                                <h2>Deelnemen</h2>
                            </div>

                            <div className="textCenter margin20PxBottom">
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
                            <p className="margin20PxBottom">{message}</p>
                            <button className="simpleButtons margin20PxBottom" type="submit">verzend gegevens</button>

                        </form>


                        <div className="shareIconsBox, margin20PxBottom">
                        <p><strong>Deel deze pagina</strong></p>
                            <WhatsappShareButton
                                className="ShareIcon"
                                url={`/excursiePosts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <WhatsappIcon size={32} round/>
                            </WhatsappShareButton>
                            <EmailShareButton
                                className="ShareIcon"
                                url={`/excursiePosts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <EmailIcon size={32} round/>
                            </EmailShareButton>
                            <TelegramShareButton
                                className="ShareIcon"
                                url={`/excursiePosts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <TelegramIcon size={32} round/>
                            </TelegramShareButton>
                            <RedditShareButton
                                className="ShareIcon"
                                url={`/excursiePosts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <RedditIcon size={32} round/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                className="ShareIcon"
                                url={`/excursiePosts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <LinkedinIcon size={32} round/>
                            </LinkedinShareButton>
                        </div>

                        <Link to="/Excursies" className="back-link">
                            <button className="simpleButtons"> Terug naar de excursie pagina</button>
                        </Link>

                    </div>
                </div>
            </section>
            )
        </>
    );
}

export default ExcursionPostDetail;