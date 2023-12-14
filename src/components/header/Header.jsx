import './Header.css'
import {Link} from "react-router-dom";


function Header() {


    return (
<>



        <div className="headerContainer">

            <div className="bg"></div>

            <div className="homeTitle">
                <Link to="/">Natuurverhaal.nl</Link>
            </div>





        </div>
</>
    )
}

export default Header