import React from "react";
import Sosmed from "./Sosmed";
import Info from "./Info";
import '../../Styles/home.css'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_cont cont grid">
                <div className="home_content grid">
                    <Sosmed />
                    <div className="home_img"></div>
                    <Info />
                </div>
            </div>
        </section>
    )
}

export default Home