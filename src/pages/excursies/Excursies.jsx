import './Excursies.css'
import ExcursionBanner from "../../components/excursionBanner/ExcursionBanner.jsx";
import AdderPhoto from "../../assets/PhotoReal_een_adder_in_het_hoge_geel_gekleurde_gras_in_een_hei_0.jpg"
import SquirrelPhoto from "../../assets/PhotoReal_A_squirrel_at_4_meter_height_on_the_side_of_a_conife_0 (gespiegeld).jpg"



function Excursies() {


    return (
        <>
            {/*ExcursionBanner = top image banner (group of people)*/}
            <ExcursionBanner />

            {/*standard outer container (Row)*/}
            <div className="outer-content-container">

                {/*standard inner container (Row)*/}
                <div className="inner-content-container">

                    {/*extra inner container(column) for A and B*/}
                    <div className="Extra-inner-content-container">

                        {/*box A (Row)*/}
                        <div className="excursionContentBox1" >

                            {/*Box with introduction text (column)*/}
                            <div className="excursionIntroduction1">
                            <h2>Excursies</h2>
                            <br/>
                            <p>Hieronder vindt u het volledige overzicht van onze groepsexcursies. Deze groepsexcursies zijn in samenspraak met onze gidsen zorgvuldig samengesteld op locatie, tijd en seizoen. Zij kennen de locaties waarop ze de excursies geven als de palm van hun hand en weten precies waar ze moeten zijn.
                                <br/><br/>
                            Wilt u liever privé of met een eigen groep op pad?  Dat kan natuurlijk ook. Stuur een mail naar info@natuurverhaal.nl en wij helpen u graag verder.</p>
                            </div>

                            {/*Box with introduction text of image? (column)*/}
                            <div className="excursionIntroduction2">
                                <div className="excursionFirstBlockImageMain">
                                <img src={AdderPhoto} alt=""/>
                                </div>
                            </div>
                        </div>


                        {/*box B (Row)*/}
                        <div className="excursionContentBox1" >

                            {/*Box with excursions */}
                            <div className="excursionSecondBlockImageMain">
                                    <img src={SquirrelPhoto} alt=""/>
                            </div>

                           <div className="excursionComponentBox">
                               <h1>Hier komt het excursie component</h1>
                           </div>




                        </div>







                    </div>{/*Excursion-inner-content-container closing*/}


                </div>{/*End standard inner container (Row)*/}


            </div>{/*End standard outer container (Row)*/}





        </>
    )
}

export default Excursies