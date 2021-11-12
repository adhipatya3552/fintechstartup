import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="title">
                FinTech Startup
            </div>
            <div className="list">
                <ul>
                    <li>Home</li>
                    <li><Link to="About" smooth={true} duration={1500}>About</Link></li>
                    <li><Link to="Services" smooth={true} duration={1500}>Services</Link></li>
                    <li><Link to="Team" smooth={true} duration={1500}>Team</Link></li>
                    <li><Link to="Blog" smooth={true} duration={1500}>Blog</Link></li>
                </ul>
            </div>
            
            <button>
                <Link 
                to="Contact"
                smooth={true}
                duration={1500}>
                    Contact Us
                </Link>
            </button>
        </div>
    )
}

export default Navbar;