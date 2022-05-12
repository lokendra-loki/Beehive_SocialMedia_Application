import React from 'react'
import "./jobPost.scss"
import { format } from 'timeago.js';
import { Link } from 'react-router-dom'




function JobPost({ jobPost }) {
    return (

        //On clicking this post we should go to jonPostLg with id of this post
        <Link to={`/jobPost/${jobPost._id}`} className="link">
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
         </Link>
    )
}

export default JobPost