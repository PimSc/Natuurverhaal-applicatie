import './Profiel.css';
import question from "../../assets/icons/question-grey-icon.png"
 
function Profiel() {

return (
<>
    <div className="outer-content-container">
        <div className="inner-content-container-column">

            <div className="profileFirstTextBox">
            <h1>Openbaar profiel</h1>
            <br/>
            <h6>Hier vind je alles wat je moet weten over je openbare profiel</h6>
            <p>Hieronder vul je gegevens in die iedere lezen kan inzien</p>
        </div>

        <div className="ProfileEditContentBox">
          <div className="ProfileEditBox1">
         <p>profiel foto</p>
            </div>
            <div className="ProfileEditBox2">
        <p>Wijzig foto</p>
             </div>
            <div className="ProfileEditBox3">

              </div>
            </div>




            <div className="ProfileEditContentBox">
                <div className="ProfileEditBox1">
                    <p>E-mail</p>
                    <br/>
                    <p>Naam </p>
                    <br/>
                    <p>Regio</p>
                </div>
                <div className="ProfileEditBox2">
                <p>input veld</p>
                </div>
                <div className="ProfileEditBox3">
                    <p>E-mailadres waarmee lezers contact met je kunnen opnemen <img className="iconSmall" src={question} alt="question icon"/></p>
                    <br/>
                    <p>De naam waarmee je je blogs ondertekent <img className="iconSmall" src={question} alt="question icon"/></p>
                    <br/>
                    <p>De regio waarin je actief bent <img className="iconSmall" src={question} alt="question icon"/></p>
                </div>
            </div>




            <div className="ProfileEditContentBox">
                <div className="ProfileEditBox1">
                <p>Biografie</p>
                </div>
                <div className="ProfileEditBox2">
                    <p>Input</p>
                </div>
                <div className="ProfileEditBox3">
                <p>Introduceer jezelf <img className="iconSmall" src={question} alt="question icon"/></p>

                </div>
            </div>


















<br/><br/><br/>







        </div>
    </div>


</>
);
}
 
export default Profiel;