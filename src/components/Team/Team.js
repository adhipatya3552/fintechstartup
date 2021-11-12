import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';
import Member1 from "../../images/3.jpg";
import Member2 from "../../images/4.jpg";
import Member3 from "../../images/5.jpg";
import Member4 from "../../images/6.jpg";

const Team = () => {
    return (
        <>
            <div className="teamContainer" id="Team">
                <span className="teamSmallTitle">
                    TEAM
                </span>
                <div className="teamTitle">
                    Our hard working team 
                </div>
                <div className="row">
                    <TeamMember image={Member2} name="Walter White" position="Chief Executive Officer" />
                    <TeamMember image={Member1} name="Sarah Johnson" position="Product Manager" />
                    <TeamMember image={Member3} name="William Anderson" position="CTO"/>
                    <TeamMember image={Member4} name="Amanda Jepson" position="Accountant" />
                </div>
            </div>  
        </>
    );
}

export default Team;
