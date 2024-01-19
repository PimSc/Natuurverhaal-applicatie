import './ExcursieAdmin.css';
 
function ExcursieAdmin() {
    const handleVersturenClick = () => {
        // Plaats hier de logica voor het versturen van het bericht
        console.log('Bericht wordt verstuurd...');
    };


return (
<>

    <div className="inner-content-container-column">

        <div className="inner-content-container-column">
            <h1>Welkom admin</h1>
        <h4>Maak hier een excursie aan voor het overzicht</h4>
            <p>Een activiteit verwijderen kan in het algemene excursie overzicht</p>
    </div>


        {/*<form onSubmit={handleSubmit}>*/}
    <label className="Input-Margin">
        Image: <br/>
        <textarea className="textAreaOneLine"
                  name="image"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Caption: <br/>
        <textarea className="textAreaOneLine"
                  name="caption"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Title: <br/>
        <textarea className="textAreaOneLine"
                  name="title"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Subtitle: <br/>
        <textarea className="textAreaOneLine"
                  name="subtitle"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Content: <br/>
        <textarea className="textAreaStory"
                  name="content"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Activity date: <br/>
        <textarea className="textAreaOneLine"
                  name="activityDate"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Activity time: <br/>
        <textarea className="textAreaOneLine"
                  name="ActivityTime"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Price: <br/>
        <textarea className="textAreaOneLine"
                  name="price"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Location: <br/>
        <textarea className="textAreaOneLine"
                  name="location"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Subject: <br/>
        <textarea className="textAreaOneLine"
                  name="subject"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Niveau: <br/>
        <textarea className="textAreaOneLine"
                  name="niveau"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <label className="Input-Margin">
        Guide: <br/>
        <textarea className="textAreaOneLine"
                  name="guide"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

    <p>profile picture automatisch</p>

    <label className="Input-Margin">
        MaxParticipants: <br/>
        <textarea className="textAreaOneLine"
                  name="maxParticipants"
            // value={formData.title}
            // onChange={handleChange}
        />
    </label>

<p>currentParticipants automatisch</p>

        <button className="SimpleButtons" type="button" onClick={handleVersturenClick}>
            Excursie <strong>plaatsen</strong> in het excursie overzicht
        </button>

</div>

</>
);
}
 
export default ExcursieAdmin;