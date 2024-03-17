import './Excursions.css'
import ExcursionBanner from "../../components/excursionBanner/ExcursionBanner.jsx";
import AdderPhoto from "./../../../public/assets/websiteImages/AdderPhoto.jpg"
import ExcursionOverview from "../../components/excursionOverview/ExcursionOverview.jsx";
import {Link} from "react-router-dom";


function Excursions() {


    return (
        <>
            {/*ExcursionBanner = top image banner (group of people)*/}
            <ExcursionBanner/>


            <div className="outer-content-container">
                <div className="inner-content-container">
                    <div className="Extra-inner-content-container">
                        <article>
                            <section>
                                <div className="excursionContentBox1">
                                    <div className="excursionIntroduction1">

                                        <h2>Excursies</h2>
                                        <br/>
                                        <p>Hieronder vindt u het volledige overzicht van onze groepsexcursies. Deze
                                            groepsexcursies zijn in samenspraak met onze gidsen zorgvuldig samengesteld
                                            op
                                            locatie, tijd en seizoen. Zij kennen de locaties waarop ze de excursies
                                            geven als de
                                            palm van hun hand en weten precies waar ze moeten zijn.
                                            <br/><br/>
                                            Wilt u liever privé of met een eigen groep op pad? Dat kan natuurlijk ook.
                                            Stuur een
                                            mail naar info@natuurverhaal.nl en wij helpen u graag verder.</p>
                                    </div>
                                    {/*Box with introduction text of image? (column)*/}
                                    <div className="excursionIntroduction2">
                                        <img src={AdderPhoto} alt=""/>
                                    </div>
                                </div>
                            </section>

                            {/*box B (Row)*/}
                            <section className="excursionContentBox1">
                                {/*Box with excursions */}
                                <div className="excursionComponentBox">
                                    <ExcursionOverview/>
                                </div>
                            </section>
                        </article>
                    </div>
                    {/*Excursion-inner-content-container closing*/}
                </div>
                {/*End standard inner container (Row)*/}
            </div>
            {/*End standard outer container (Row)*/
            }


        </>
)
}

export default Excursions