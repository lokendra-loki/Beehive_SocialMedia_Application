import React from 'react'
import "./blog.scss"


function Blog() {
    return (
        <div className='blog'>
            <img src="/assets/cover.jpeg" alt="" className="blogImg" />





            <div className="blogInsideCon">
                <div className="blogDateAndTimeRead">
                    <span className="blogDate">24 jan, 2022</span>
                    <span className="blogTimeRead">3 min read</span>
                </div>
                <span className="blogTitle">Usinga Social Medias Properly for Business and sports that hepls yo acxcount for th globe</span>
                <span className="blogDesc">Lorem ipsum uifng  quisquam sequi corporis uifng  quisquam sequi corporis  voluptates praesentium porro magni delectus quae soluta doloremque accusantium, dignissimos odit, quas tempora explicabo iusto ducimus nihil?</span>
                <hr className='blogHr' />
                <span className="blogContinueReading">Continue reading...</span>
            </div>
        </div>

    )
}

export default Blog