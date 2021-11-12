import React from 'react';
import './Blog.css';
import BlogNews from './BlogNews';
import News1 from "../../images/7.jpeg";
import News2 from "../../images/8.jpeg";
import News3 from "../../images/9.jpeg";

const Blog = () => {
    return (
        <>
            <div className="blogContainer" id="Blog">
                <span className="blogSmallTitle">
                    Blog
                </span>
                <div className="blogTitle">
                    Recent posts from our Blog
                </div>
                <div className="row">
                    <BlogNews image={News1} date="Tue, September 15" />
                    <BlogNews image={News2} date="Fri, August 28" />
                    <BlogNews image={News3} date="Mon, July 11"/>
                </div>
            </div>
        </>
    )
}

export default Blog
