import './ExcursieAdmin.css';

function ExcursieAdmin() {




    return (
        <>

            <div className="outer-content-container-column">
                <div className="inner-content-container-column">

                    <div className="inner-content-container-column">
                        <h1>Welkom admin</h1>
                        <h4>Maak hier een excursie aan voor het overzicht</h4>
                        <p>Een activiteit verwijderen kan in het algemene excursie overzicht</p>
                    </div>

                    <div className="textCenter">

                        <form action="">
                            <div className="textStart">

                                <label htmlFor="image">
                                    <b>Afbeelding:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    id="image"
                                    autoComplete="on"

                                />


                                <label htmlFor="caption">
                                    <b>Caption:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="caption"
                                    id="caption"
                                    autoComplete="on"
                                />


                                <label htmlFor="title">
                                    <b>Title:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="title"
                                    id="title"
                                    autoComplete="on"
                                />


                                <label htmlFor="subtitle">
                                    <b>Subtitle:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="subtitle"
                                    id="subtitle"
                                    autoComplete="on"
                                />


                                <label htmlFor="content">
                                    <b>Content:</b>
                                </label>
                                <textarea
                                    className="textAreaStory"
                                    name="content"
                                    id="content"
                                    autoComplete="on"
                                />


                                <label htmlFor="activityDate">
                                    <b>Activity date:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="activityDate"
                                    id="activityDate"
                                    autoComplete="on"
                                />


                                <label htmlFor="ActivityTime">
                                    <b>Activity time:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="ActivityTime"
                                    id="ActivityTime"
                                    autoComplete="on"
                                />


                                <label htmlFor="price">
                                    <b>Price:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="price"
                                    id="price"
                                    autoComplete="on"
                                />


                                <label htmlFor="location">
                                    <b>Location:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="location"
                                    id="location"
                                    autoComplete="on"
                                />


                                <label htmlFor="subject">
                                    <b>Subject:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="subject"
                                    id="subject"
                                    autoComplete="on"
                                />


                                <label htmlFor="niveau">
                                    <b>Niveau:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="niveau"
                                    id="niveau"
                                    autoComplete="on"
                                />


                                <label htmlFor="guide">
                                    <b>Guide:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="guide"
                                    id="guide"
                                    autoComplete="on"
                                />

                                <label htmlFor="maxParticipants">
                                    <b>MaxParticipants:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="maxParticipants"
                                    id="maxParticipants"
                                    autoComplete="on"
                                />

                                <p>profile picture automatisch</p>
                                <p>currentParticipants automatisch</p>

                            </div>

                            <button className="SimpleButtons" type="submit">
                                Excursie <strong>plaatsen</strong> in het excursie overzicht
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ExcursieAdmin;