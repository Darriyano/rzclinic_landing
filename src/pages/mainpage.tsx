import "../styles/main-page-intro.css"
import {About} from "../components/main-page/about";
import {Intro} from "../components/main-page/intro";
import {Offers} from "../components/main-page/offers";
import {Questions} from "../components/main-page/questions";
import {Footer} from "../components/footer";
import {Doctors} from "../components/main-page/doctors";
import React, {useEffect} from "react";
import Header from "../components/header";

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх
    }, []);

    return (<>
        <Header/>
        <Intro/>
        {/*<About/>*/}
        <Offers/>
        <Doctors/>
        <Questions/>
        <Footer/>
    </>)
}

export default MainPage