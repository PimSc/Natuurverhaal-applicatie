import './Prikbord.css';
import WriteBulletin from "../../components/writeBulletin/WriteBulletin.jsx";

function Prikbord() {

return (
<>
    <div className="outer-content-container">
        <div className="inner-content-container-column">

            <div className="bulletinBoardButtons">
                <button type="button">Prikbord bericht aanmaken</button>
            </div>

<WriteBulletin/>

            <h2>prikbord pagina</h2>
                    <br/>
            <p>prikbord bericht plaatsen</p>
            <p>prikbord overzicht</p>



        </div>
    </div>

</>
);
}

export default Prikbord;