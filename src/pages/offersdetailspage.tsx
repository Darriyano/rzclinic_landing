import Header from "../components/header";
import "../styles/offer-details-page.css"
import {Footer} from "../components/footer";
import {useNavigate, useParams} from "react-router-dom";
import {offers} from "../components/offers_array"
import {arr} from "../components/prices_array"
import therapy from "../image-offers/terapy.png";
import vectorProfil from "../vectors/vector-offers/profil.png";
import {capitalize} from "../components/capitalisation";
import {useEffect} from "react";
import {MobileButtonBack} from "../components/mobile-button-back";


export const OfferDetails = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    if (!id) id = "1";

    let subarray_prices;
    let subarray_offers;


    if (Number(id) === 7) subarray_prices = arr[1];
    else {
        for (let i = 0; i < 5; i++) {
            if (arr[i].id === Number(id)) subarray_prices = arr[i];
        }
    }

    for (let i = 0; i < 8; i++) {
        if (offers[i].id === Number(id)) subarray_offers = offers[i];
    }

    if (!subarray_offers) subarray_offers = {
        id: 1,
        title: "Терапия",
        description: "Терапия – это методы лечения зубов без хирургического вмешательства, восстановление здоровья зубов. Самая частая процедура в терапии – это лечение кариеса.",
        image: therapy,
        vector: vectorProfil,
        whenNeeded: "Терапия необходима, когда зубы подвергаются поражению из-за кариеса, воспалений, или других заболеваний, требующих вмешательства для сохранения их здоровья."
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх
    }, []);


    return (
        <>
            <Header/>
            <MobileButtonBack/>
            <div className="details-intro-screen">
                <span>{subarray_offers.title}</span>

                <div className="vector-image">
                    <div className="shape-layout"></div>
                    <img src={subarray_offers.vector} className="vector-image" alt=""/>
                </div>
            </div>

            <div className="new-frame">
                <p>Когда нужна {subarray_offers.title}?</p>
                <span>{subarray_offers.whenNeeded}</span>
                <button className="button-answer" onClick={() => {
                    navigate("/contacts")
                }}>Записаться →
                </button>
            </div>
            {subarray_prices ? (
                <div className="accordeons-details">
                    <p>Цены на услуги</p>
                    {subarray_prices.subitem.map((subsection, subIndex) => (
                        <div key={subIndex} className="block">
                            <span>{subsection.subtitle}</span>
                            {subsection.items.map((item, itemIndex) => (
                                <details key={itemIndex}>
                                    <summary>{item.name}</summary>
                                    <p>{capitalize(item.description)}</p>
                                    <p>Цена: {item.price} руб.</p>
                                    <p>Время: {item.time}</p>
                                </details>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (<div className="accordeons-details-2">
                {/*<button onClick={() => navigate("/contacts")}>Уточнить цены на услуги</button>*/}
            </div>)}

            <Footer/>
        </>
    )
        ;
};
