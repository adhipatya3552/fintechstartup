import React from 'react';
import './BlogNews.css';
import { FaArrowRight } from "react-icons/fa";

const BlogNews = ({ date, image, title }) => {
    return (
        <>
            <div className="blogNewsBody">
                <div className="blogNewsImg">
                    <img src={image} alt="Team Member"/>
                </div>
                <div className="date">
                    {date}
                </div>
                <div className="title">
                    {/* {title} */} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quibusdam 
                </div>
                <span>Read More &nbsp;<FaArrowRight /> </span>
            </div>
        </>
    )
}

export default BlogNews
