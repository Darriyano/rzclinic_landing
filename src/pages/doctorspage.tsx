import Header from "../components/header";
import "../styles/doctors-page-styles.css"
import {Footer} from "../components/footer";
import {doctors} from "../components/doctors_array"
import {useEffect} from "react";
import {MobileButtonBack} from "../components/mobile-button-back";
import DoctorCard from "../components/doctor-card";

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

            <div className="secondary">Познакомьтесь с нашими специалистами и будьте
                уверены: ваше здоровье в надежных руках!
            </div>
        </div>

        <div className="all-doctors-wrapper">
            {doctors.map((doctor) => (
                <DoctorCard
                    image={doctor.image}
                    name={doctor.name}
                    position={doctor.position}
                    education={doctor.education}
                    work_area={doctor.work_area}
                    experience={doctor.experience}
                />
            ))}

        </div>

        <Footer/>
    </>)
}