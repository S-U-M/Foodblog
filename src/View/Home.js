import "../Style/Style.css";
import UploadCard from "../Components/UploadCard";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">

            {/* Navbar */}
            <div className="navbar">
                <h1 className="logo">FoodBlog</h1>

                <div className="nav-buttons">
                    {/* <button className="upload-btn">Upload</button>
                    <button className="about-btn">AboutUs</button> */}


                    {/* <button className="menu-link highlighted">Upload</button>
                <button className="menu-su">AboutUs</button> */}

                    <Link to={"/aboutus"} className="menu-link highlighted">Upload</Link>
                    <Link to={"/aboutus"} className="menu-link">AboutUs</Link>

                </div>
            </div>

            {/* Main Content: */}
            <div className="content">
                <h2>Show your food to the world</h2>

                <div className="upload-section">
                    <UploadCard />
                    <UploadCard />
                    <UploadCard />
                </div>

                <div className="cancel-btn">
                    <p>Cancel all uploads</p>
                </div>
            </div>

        </div>
    );
}

export default Home;