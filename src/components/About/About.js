import React from 'react';
import './About.css';
import aboutImg from '../../images/2.jpg';
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className="aboutContainer" id="About">
                <div className="aboutContent">
                    <span className="aboutSmallHeading">
                        WHO WE ARE
                    </span>
                    <div className="aboutTitle">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet quod voluptatem, officiis qui hic deserunt quasi repellendus.
                    </div>
                    <p className="aboutBody">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime assumenda praesentium corporis tempore, error unde excepturi consectetur, harum quibusdam enim quia saepe dolorem accusantium magni consequatur, pariatur deserunt tempora!
                    </p>
                    <button>Get Started &nbsp;<FaArrowRight /> </button>
                </div>
                <div className="aboutImage">
                    <img src={aboutImg} alt="About Image" />
                </div>
            </div>
        </>
    );
}

export default About;
