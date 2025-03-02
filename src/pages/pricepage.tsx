import Header from "../components/header";
import {Footer} from "../components/footer";
import "../styles/price-page.css";
import {arr} from "../components/prices_array";
import {capitalize} from "../components/capitalisation";
import {useEffect} from "react";
import {MobileButtonBack} from "../components/mobile-button-back";
import {useNavigate} from "react-router-dom";


export const PricePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх
    }, []);

    return (
        <>
            <Header/>
            <MobileButtonBack/>
            <div className="price-intro-screen">
                <div className="textframe">Цены</div>
                <div className="secondary">
                    Здесь Вы можете ознакомиться с актуальными ценами на стоматологические услуги
                </div>
            </div>

            <div className="accordeons">
                {arr.map((section, index) => (
                    <div key={index} className="section">
                        <p>{section.title}</p>
                        {section.subitem.map((subsection, subIndex) => (
                            <div key={subIndex} className="block">
                                <span>{subsection.subtitle}</span>
                                {subsection.items.map((item, itemIndex) => (
                                    <details key={itemIndex}>
                                        <summary>{capitalize(item.name)}</summary>
                                        <div className="details-content">
                                            <p>{capitalize(item.description)}</p>
                                            <p><b>Цена: {item.price} руб.</b></p>
                                            <p>Время: {item.time}</p>
                                            <button onClick={() => navigate("/form")}>Записаться →</button>
                                        </div>
                                    </details>

                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <Footer/>
        </>
    );
};
