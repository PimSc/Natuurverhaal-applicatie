import './BulletinBoard.css';
import BulletinBoardOverview from "../../components/bulletinBoardOverview/BulletinBoardOverview.jsx";



function BulletinBoard() {
    return (
        <>
            <div className="inner-content-container-textFields">
                <BulletinBoardOverview/>
            </div>
        </>
    );
}

export default BulletinBoard;