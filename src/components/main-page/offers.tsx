import React, {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {offers} from "../offers_array";
import roundButtonleft from "../../vectors/left-arrow-button.svg";
import roundButtonright from "../../vectors/right-arrow-button.svg";
import "../../styles/main-page-offers.css";
import {CardOffer} from "../card-offer";
import {Link} from "react-router-dom";


export const Offers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? offers.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === offers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackTouch: true,
        trackMouse: false,
    });

    const section = offers[currentIndex];

    return (
        <div className="offers-screen" {...handlers}>
            <div className="info-wrapper">
                <button className="round-button" onClick={handlePrev}>
                    <img className="vector" alt="Round button" src={roundButtonleft}/>
                </button>
                <CardOffer
                    title={section.title}
                    description={section.description}
                    id={section.id}
                    image={section.image}
                    key={section.id}
                />
                <button className="round-button" onClick={handleNext}>
                    <img className="vector" alt="Round button" src={roundButtonright}/>
                </button>

                <div className="button2-container">
                    <button className="round-button2" onClick={handlePrev}>
                        <img className="vector" alt="Round button" src={roundButtonleft}/>
                    </button>
                    <Link to="/offering">
                        <p className="offer-link">Все&nbsp;услуги</p>
                    </Link>
                    <button className="round-button2" onClick={handleNext}>
                        <img className="vector" alt="Round button" src={roundButtonright}/>
                    </button>
                </div>
            </div>

            <div className="info-text-wrapper">
                <p className="offer-main-text">
                    <span className="span">Наши</span>
                    <span className="text-wrapper-2"> услуги</span>
                </p>
                <p className="text-wrapper-3">
                    Мы заботимся о каждом пациенте и гарантируем
                    индивидуальный подход, использование современных технологий и максимально комфортные условия
                </p>
            </div>
        </div>
    );
};
