import './Footer.css';
import gmailIcon from "./../../../public/assets/icons/gmail.png"
import instagramIcon from "./../../../public/assets/icons/instagram.png"
import {Link} from "react-router-dom";

function Footer() {

return (
<>

    <div className="footerOuterBox">
        <div className="footerBoxTop">
            <hr/>
        </div>

        <div className="footerInnerBox">



            <div className="footerBox1">
                <Link to="/Contact">
                <img src={gmailIcon} alt="Gmail icon"/>
                </Link>
            </div>
            <div className="footerBox2">
                <h5>© Natuurverhaal</h5>
            </div>
            <div className="footerBox3">
                <Link to="https://www.instagram.com/pim.schuitema/">
                <img src={instagramIcon} alt="Instagram icon"/>
            </Link>
            </div>
        </div>
    </div>

</>
);
}

export default Footer;