import React from 'react'
import "./jobPost.scss"
import { format } from 'timeago.js';



function JobPost({ jobPost }) {
    return (
        <div className='jobPost'>
            <img src={jobPost.companyProfileImg || "/assets/cover.jpeg"} alt="" className="jobCompanyLogo" />
            <div className="jpInfoCon">
                <span className='jpJobTitle'>{jobPost.position} </span>
                <span className='jpPostTime'>{format(jobPost.createdAt)}</span>
                <span className='jpCompanyAddress'>{jobPost.location}</span>
                <span className='jpCompanyName'>{jobPost.companyName}</span>
            </div>
            <hr className='jpHr' />
            <button className="fullTimeBut">{jobPost.jobType === 1 ? "Full-Time" : "Part-Time"}</button>
        </div>
    )
}

export default JobPost