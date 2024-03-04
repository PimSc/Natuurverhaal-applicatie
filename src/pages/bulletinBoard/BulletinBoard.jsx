import './BulletinBoard.css';
import BulletinBoardOverview from "../../components/bulletinBoardOverview/BulletinBoardOverview.jsx";
import {Link} from "react-router-dom";

import { useContext } from 'react';
// import { AuthContextData } from "../../context/AuthContextProvider";

function BulletinBoard() {


    return (
        <>
            <div className="inner-content-container-textFields">
                {/*<button className="simpleButtons" id="bulletinBoardButton1" type="button">*/}
                {/*    <Link to="/WriteBulletin">BulletinBoard bericht aanmaken</Link>*/}
                {/*</button>*/}


                <BulletinBoardOverview/>
            </div>
        </>
    );
}

export default BulletinBoard;