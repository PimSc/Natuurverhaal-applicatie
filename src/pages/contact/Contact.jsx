import './Contact.css'
// import useBlog from "../../Hooks/useAllBlogs.jsx";


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
                        <p>  <a href={`mailto:${emailAddress}`}><strong>{emailAddress}</strong></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
