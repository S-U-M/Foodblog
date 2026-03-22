import "../Style/Style.css";

function Home() {
    return (
        <div className="container"> 

        {/* Navbar */}
        <div className="navbar">
             <h1 className="logo">FoodBlog</h1>
        
            <div className="nav-buttons">
                <button className="upload-btn">Upload</button>
                <button className="about-btn">AboutUs</button>
            </div>
        </div>

        {/* Main Content: */}
        <div className="content">
            <h2>Show your food to the world</h2>

            <div className="upload-section">
                <div className="upload-placeholder">+</div>
                <div className="upload-placeholder">+</div>
                <div className="upload-placeholder">+</div>
            </div>

            <div className="cancel-btn">
                <p>Cancel all uploads</p>
            </div>
        </div>

    </div>
    );
}

export default Home;