import './Contact.css'

function Contact() {
    const emailAddress = "info@natuurverhaal.nl";

    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <h1>Contact</h1>
                    <div className="textCenter">
                        <br/>
                        <p>Vragen of opmerkingen? stuur ons een email</p>
                        <p> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                    </div>
                </div>
            </div>

            <img src="../../assets/websiteImages/squirrelPhoto.jpg" alt="eekhoorn 2"/>
            <img src="src/assets/websiteImages/squirrelPhoto.jpg" alt="eekhoorn 3"/>




        </>
    )
}

export default Contact