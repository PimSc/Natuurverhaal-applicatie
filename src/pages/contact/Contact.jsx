import './Contact.css'
import useProfileImage from "../../Hooks/useProfileImage.jsx";
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import {useContext} from "react";

function Contact() {
    const emailAddress = "info@natuurverhaal.nl";
    const {profileImage} = useProfileImage();
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <h1>Contact</h1>
                    <div className="textCenter">
                        <br/>
                        <p>Vragen of opmerkingen? stuur ons een email</p>
                        <p>  <a href={`mailto:${emailAddress}`}><strong>{emailAddress}</strong></a></p>

                        {isAuth &&
                        <img src={profileImage} alt=""/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact