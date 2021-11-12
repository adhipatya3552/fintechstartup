import React from 'react';
import './Header.css';
import headerImage from '../../images/1.png';
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="content" id="Home">
            <div className="title">
                <h1>We offer modern solutions <br /> for growing your business</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Aspernatur delectus voluptatem quia</h3>
                <button>Get Started &nbsp;<FaArrowRight /> </button>
            </div>
            <div className="headerImg">
                <img src={headerImage} alt="Header Image" />
            </div>
        </div>
    )
}

export default Header;
