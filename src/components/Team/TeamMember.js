import React from 'react';
import './TeamMember.css';

const TeamMember = ({ image, name, position }) => {
    return (
        <>
            <div className="teamMemberBody">
                <div className="teamMemberImg">
                    <img src={image} alt="Team Member"/>
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="position">
                    {position}
                </div>
                <div className="quote">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur reprehenderit numquam quo iusto dolores voluptas a tenetur quis illo molestiae nobis.
                </div>
            </div>
        </>
    );
}

export default TeamMember;
