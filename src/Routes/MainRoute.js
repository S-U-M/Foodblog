import {Routes, Route} from "react-router-dom";
import Home from "../View/Home";
import Noplin from "../View/Noplin/Noplin";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutUs from "../View/About/AboutUs";

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noplin" element={<Noplin />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/upload" element={<Noplin />} />
        </Routes>
    );
}