import './Header.css'
import {Link} from "react-router-dom";


// Header component is imported directly into App.jsx

function Header() {

    return (
<>
        <div className="headerContainer">
            <div className="headerBg"></div>

            <div className="homeTitle">
                <Link to="/">Natuurverhaal.nl</Link>
            </div>
        </div>
</>
    )
}



export default Header