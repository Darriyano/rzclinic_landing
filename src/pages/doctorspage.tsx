import Header from "../components/header";
import "../styles/doctors-page-styles.css"
import {Footer} from "../components/footer";
import {doctors} from "../components/doctors_array"
import {useEffect} from "react";
import {capitalize} from "../components/capitalisation";
import {MobileButtonBack} from "../components/mobile-button-back";

export const DoctorsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><Header/>
        <MobileButtonBack/>
        <div className="doctors-intro-screen">
            <div className="textframe">
                <span className="main-texts">Наши </span>
                <span className="main-texts2"> врачи</span>
            </div>

            <div className="secondary">В нашей клинике работают высококвалифицированные специалисты с многолетним
                опытом, которые заботятся о здоровье и красоте вашей улыбки. Каждый врач — это профессионал своего дела,
                владеющий передовыми методами диагностики и лечения, постоянно совершенствующий свои навыки и
                применяющий индивидуальный подход к каждому пациенту. Познакомьтесь с нашими специалистами и будьте
                уверены: ваше здоровье в надежных руках!
            </div>
        </div>

        <div className="all-doctors-wrapper">
            {doctors.map((doctor) => (
                <div className="doctor-card">
                    <div><img src={doctor.image} alt=""/></div>

                    <p>{doctor.name}</p>
                    <span>{capitalize(doctor.position)}</span>
                    <span><b>Образование: </b>{doctor.education}</span>
                    <span><b>Специализация: </b>{doctor.work_area}</span>
                    <span> <b>Опыт работы: </b>{doctor.experience}</span>
                </div>))}

        </div>

        <Footer/>
    </>)
}