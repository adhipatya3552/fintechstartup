import React from 'react';
import './Services.css';
import ServiceContent from './ServiceContent';

const Services = () => {
    return (
        <>
            <div className="servicesContainer" id="Services">
                <span className="servicesSmallTitle">
                    SERVICES
                </span>
                <div className="servicesTitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="row">
                    <ServiceContent colorService="blue"/>
                    <ServiceContent colorService="orange"/>
                    <ServiceContent colorService="green"/>
                </div>
                <div className="row">
                    <ServiceContent colorService="red"/>
                    <ServiceContent colorService="violet"/>
                    <ServiceContent colorService="purple"/>
                </div>
            </div>
        </>
    );
}

export default Services;