import React from 'react'
import "./jobPost.scss"


function JobPost() {
    return (
        <div className='jobPost'>
            <img src="/assets/cover.jpeg" alt="" className="jobCompanyLogo" />
            <div className="jpInfoCon">
                <span className='jpJobTitle'>Remote Flutter Developer</span>
                <span className='jpPostTime'>10 min ago</span>
                <span className='jpCompanyAddress'>4901 Lakeland Park Drive, GA, USA</span>
                <span className='jpCompanyName'>Clinivex Analytics</span>
               
            </div>
            <hr className='jpHr'/>
           <button className="fullTimeBut">Full Time</button>
        </div>
    )
}

export default JobPost