import './Excursies.css'
import ExcursionBanner from "../../components/excursionBanner/ExcursionBanner.jsx";
import ExcursionSideImageMain from "../../assets/ExcursionSideImageMain.jpg"
import ExcursionSideImagePhone from "../../assets/ExcursionSideImagePhone.jpg"


function Excursies() {


    return (
        <>

            <ExcursionBanner />
            <div className="outer-content-container">
                <div className="inner-content-container">

                    <p>excursies pagina</p>

                    <div className="excursionSideImageMain">
                        <img src={ExcursionSideImageMain} alt="Een aantal mensen lopen door een natuurlijke vallei van watervallen en naaldbos, met een achtergrond waarin bergen opgaan in de mist en een voorgrond met prachtig gekleurde bloemen in roze, geel en oranje" />
                    </div>
                    <div className="excursionSideImagePhone">
                        <img src={ExcursionSideImagePhone} alt="Een aantal mensen lopen door een natuurlijke vallei van watervallen en naaldbos, met een achtergrond waarin bergen opgaan in de mist en een voorgrond met prachtig gekleurde bloemen in roze, geel en oranje" />
                    </div>

                </div>
            </div>





        </>
    )
}

export default Excursies