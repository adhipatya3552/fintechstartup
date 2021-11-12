import React from 'react';
import './ServiceContent.css';
import { FaRocketchat } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";

const ServiceContent = ({ colorService }) => {
    return (
        <>
          {/* <FaRocketchat />  */}
          <div className="serviceBody" style={{ borderBottom: '4px solid', borderBottomColor: `${colorService}`}}>
              <div className="serviceIcon" style={{ color: `${colorService}` }}>
                <FaRocketchat />
              </div>
              <div className="serviceTitle">
                  Lorem ipsum dolor
              </div>
              <p className="serviceInfo">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iusto mollitia asperiores ea quibusdam, odit minus eaque vitae officiis.
              </p>
              <span className="readMore" style={{color: `${colorService}`}}>Read More &nbsp; <FaArrowRight /> </span>
          </div>
        </>
    )
}

export default ServiceContent
