import './Header.css'
import {Link} from "react-router-dom";

function Header() {

    return (
<>
    <div className="outer-content-container-column">
        <div className="headerContainer">
            <div className="headerBg"></div>

            <div className="homeTitle">
                <Link to="/">Natuurverhaal.nl</Link>
            </div>
        </div>
    </div>
</>
    )
}



export default Header