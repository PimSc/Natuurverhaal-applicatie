import './Excursies.css'
import ExcursionBanner from "../../components/excursionBanner/ExcursionBanner.jsx";
import ExcursionSideImageMain from "../../assets/ExcursionSideImageMain.jpg"
import ExcursionSideImagePhone from "../../assets/ExcursionSideImagePhone.jpg"


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
                    <div className="Excursion-inner-content-container">

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
                                <h2>hier nog wat zetten</h2>
                            </div>
                        </div>


                        {/*box B (Row)*/}
                        <div className="excursionContentBox1" >

                            {/*Box with excursions */}
                            <div className="excursionsListBox">
                            <h2>Box with excursions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem doloremque eos eum ipsa iure maiores neque numquam, porro qui quisquam, ratione recusandae. Aliquid esse fugiat, </p>
                            </div>

                           <div className="excursioncomponentBox">
                               <h1>Hier komt het excursie component</h1>
                           </div>




                        </div>







                    </div>{/*Excursion-inner-content-container closing*/}




                    {/*Sidebar image main*/}
                    <div className="excursionSideImageMain">
                        <img src={ExcursionSideImageMain} alt="Een aantal mensen lopen door een natuurlijke vallei van watervallen en naaldbos, met een achtergrond waarin bergen opgaan in de mist en een voorgrond met prachtig gekleurde bloemen in roze, geel en oranje" />
                    </div>
                    {/*Sidebar image phone*/}
                    <div className="excursionSideImagePhone">
                        <img src={ExcursionSideImagePhone} alt="Een aantal mensen lopen door een natuurlijke vallei van watervallen en naaldbos, met een achtergrond waarin bergen opgaan in de mist en een voorgrond met prachtig gekleurde bloemen in roze, geel en oranje" />
                    </div>





                </div>
            </div>





        </>
    )
}

export default Excursies