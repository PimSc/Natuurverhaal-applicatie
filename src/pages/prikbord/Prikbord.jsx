import './Prikbord.css';
import PrikbordOverview from "../../components/prikbordOverview/PrikbordOverview.jsx";
import {Link} from "react-router-dom";


function Prikbord() {


    return (
        <>
            <div className="inner-content-container-textFields">


                <button className="SimpleButtons" id="bulletinBoardButton1" type="button">
                    <Link to="/WriteBulletin"><strong>Prikbord bericht aanmaken</strong></Link>

                </button>

                <PrikbordOverview/>
            </div>
        </>
    );
}

export default Prikbord;