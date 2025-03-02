import React from "react";
import "../../styles/main-page-about.css";
import Image from "../../images-doctors/clinic.jpeg"


export const About = () => {
    return (
        <div className="screen">
            <div className="frame">
                <div className="text-wrapper">О клинике</div>
                <p className="div">
                    Стоматологическая клиника Зульфии Рамазановой — это современный центр, где забота о здоровье и
                    красоте улыбки стоит на первом месте. Наши опытные специалисты используют передовые технологии и
                    индивидуальный подход к каждому пациенту. Мы предлагаем широкий спектр услуг: терапия, ортопедия,
                    хирургия, имплантация, ортодонтия и профилактика. Доверьте нам свою улыбку, и мы позаботимся о ней!
                </p>
            </div>

            <div className="div-wrapper">
                <img src={Image} alt="" />
            </div>
        </div>
    );
};
