import {Routes, Route} from "react-router-dom";
import Home from "../View/Home";
import Noplin from "../View/Noplin/Noplin";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noplin" element={<Noplin />} />
        </Routes>
    );
}