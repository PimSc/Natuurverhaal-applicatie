import './Prikbord.css';
import PrikbordOverview from "../../components/prikbordOverview/PrikbordOverview.jsx";
import {Link} from "react-router-dom";

import { useContext } from 'react';
// import { AuthContextData } from "../../context/AuthContextProvider";

function Prikbord() {

    // const { userRoles, isAuthenticated } = useContext(AuthContextData);
    //
    // const allowedRoles = ['ROLE_USER', 'ROLE_ADMIN']
    // const isAllowed = userRoles.some(x => allowedRoles.includes(x))

    return (
        <>
            <div className="inner-content-container-textFields">
                <button className="SimpleButtons" id="bulletinBoardButton1" type="button">
                    <Link to="/WriteBulletin"><strong>Prikbord bericht aanmaken</strong></Link>
                </button>

                {/*{isAllowed && (<button className="SimpleButtons" id="bulletinBoardButton1" type="button">*/}
                {/*    <Link to="/WriteBulletin"><strong>Prikbord bericht aanmaken</strong></Link>*/}
                {/*</button>)}*/}

                <PrikbordOverview/>
            </div>
        </>
    );
}

export default Prikbord;