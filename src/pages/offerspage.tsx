import Header from "../components/header";
import "../styles/offer-page.css"
import {CardOffer} from "../components/card-offer";
import {Footer} from "../components/footer";
import {offers} from "../components/offers_array"
import {useEffect} from "react";
import {MobileButtonBack} from "../components/mobile-button-back";

export const AllOfferPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх
    }, []);

    return (<><Header/>
        <MobileButtonBack/>
        <div className="offers-intro-screen">
            <div className="textframe">
                <span className="main-texts">Наши </span>
                <span className="main-texts2"> услуги</span>
            </div>

            <div className="secondary">В нашей стоматологической клинике мы предлагаем широкий спектр профессиональных
                услуг для обеспечения здоровья и красоты ваших зубов
            </div>
        </div>

        <div className="all-offers-wrapper">
            {offers.map((section) => (
                <CardOffer title={section.title} description={section.description}
                           id={section.id} image={section.image}/>
            ))}
        </div>

        <Footer/>
    </>)
}