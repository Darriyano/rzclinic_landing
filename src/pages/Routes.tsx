import {Route, Routes} from "react-router-dom";
import {AllOfferPage} from "./offerspage";
import MainPage from "./mainpage";
import {PricePage} from "./pricepage";
import {Contactspage} from "./contactspage";
import {OfferDetails} from "./offersdetailspage";
import {DoctorsPage} from "./doctorspage";

export const Routing = () => {
    return (<Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/offering" element={<AllOfferPage/>}/>
        <Route path="/price" element={<PricePage/>}/>
        <Route path="/contacts" element={<Contactspage/>}/>
        <Route path="/offer-details/:id" element={<OfferDetails/>}/>
        <Route path="/doctors" element={<DoctorsPage/>}/>
    </Routes>)
}