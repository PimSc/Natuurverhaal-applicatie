import './Excursies.css'
import ExcursionBanner from "../../components/excursionBanner/ExcursionBanner.jsx";
import AdderPhoto from "./../../../public/assets/websiteImages/AdderPhoto.jpg"
import ExcursionOverview from "../../components/excursionOverview/ExcursionOverview.jsx";
import {Link} from "react-router-dom";


function Excursies() {


    return (
        <>
            {/*ExcursionBanner = top image banner (group of people)*/}
            <ExcursionBanner/>

            {/*standard outer container (Row)*/}
            <div className="outer-content-container">

                {/*standard inner container (Row)*/}
                <div className="inner-content-container">

                    {/*extra inner container(column) for A and B*/}
                    <div className="Extra-inner-content-container">

                        {/*box A (Row)*/}
                        <div className="excursionContentBox1">

                            {/*Box with introduction text (column)*/}
                            <div className="excursionIntroduction1">


                                <h2>Excursies</h2>
                                <br/>
                                <p>Hieronder vindt u het volledige overzicht van onze groepsexcursies. Deze
                                    groepsexcursies zijn in samenspraak met onze gidsen zorgvuldig samengesteld op
                                    locatie, tijd en seizoen. Zij kennen de locaties waarop ze de excursies geven als de
                                    palm van hun hand en weten precies waar ze moeten zijn.
                                    <br/><br/>
                                    Wilt u liever privé of met een eigen groep op pad? Dat kan natuurlijk ook. Stuur een
                                    mail naar info@natuurverhaal.nl en wij helpen u graag verder.</p>
                            </div>

                            {/*Box with introduction text of image? (column)*/}
                            <div className="excursionIntroduction2">
                                <img src={AdderPhoto} alt=""/>
                            </div>
                        </div>

                        <div className="buttonCenterContainer">
                            <button className="excursionAdminButton" type="button">
                                <Link to="/writeExcursion">Activiteit plaatsen</Link>
                            </button>
                        </div>

                        {/*box B (Row)*/}
                        <div className="excursionContentBox1">

                            {/*Box with excursions */}
                            <div className="excursionComponentBox">
                                <ExcursionOverview/>
                            </div>

                        </div>

                    </div>
                    {/*Excursion-inner-content-container closing*/}


                </div>
                {/*End standard inner container (Row)*/}


            </div>
            {/*End standard outer container (Row)*/}


        </>
    )
}

export default Excursies