import './Prikbord.css';
import PrikbordOverview from "../../components/prikbordOverview/PrikbordOverview.jsx";
import {Link} from "react-router-dom";

import { useContext } from 'react';
// import { AuthContextData } from "../../context/AuthContextProvider";

function Prikbord() {


    return (
        <>
            <div className="inner-content-container-textFields">
                {/*<button className="simpleButtons" id="bulletinBoardButton1" type="button">*/}
                {/*    <Link to="/WriteBulletin">Prikbord bericht aanmaken</Link>*/}
                {/*</button>*/}


                <PrikbordOverview/>
            </div>
        </>
    );
}

export default Prikbord;