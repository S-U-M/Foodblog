import { Routes, Route } from "react-router-dom";
import Home from "../View/Home";
import Noplin from "../View/Noplin/Noplin";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutUs from "../View/About/AboutUs";
import Upload from "../View/Upload/Upload";
import { useState } from "react";

export default function MainRoute() {

    const [images, setImages] = useState([null, null, null])

    return (
        <Routes>
            <Route path="/" element={<Home images={images} />} />
            <Route path="/noplin" element={<Noplin />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/upload" element={<Upload setImages={setImages} />} />
        </Routes>
    );
}