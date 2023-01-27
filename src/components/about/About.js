import React from "react";
import '../../Styles/about.css'
import AboutIMG from '../../assets/about.jpeg'
import CV from '../../assets/CV_Gregorius Agung Nugroho.pdf'
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">Intro about me!</span>

            <div className="about_cont cont grid">
                <img src={AboutIMG} alt="" className="about_img" />

                <div className="about_content">
                    <Info />

                    <p className="about_desc">
                    I'm an enthusiastic person who can learn quickly and easy to adapt. I love to search and explore something new. I’m active in projects, organizations, and activities on my campus. But also, I have really good responsibility and focus when I have a job to do. I do love to help others and I can work professionally in a team, collaboration, and support each other.
                    My goal is to become a backend developer and data engineer.
                    </p>

                    <a download="" href={CV} className="butt butt_flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About