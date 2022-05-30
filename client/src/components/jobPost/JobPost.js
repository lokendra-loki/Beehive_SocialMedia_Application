import React from "react";
import { format } from "timeago.js";
import "./jobPost.scss";
import { Link } from "react-router-dom";

function JobPost({ jobPost }) {
  return (
    <div className="jobPost">
      <img src="/assets/cover.jpeg" alt="" className="jobCompanyLogo" />
      <div className="jpInfoCon">
        <span className="jpJobTitle">{jobPost.position}</span>
        <span className="jpPostTime">{format(jobPost.createdAt)}</span>
        <span className="jpCompanyAddress">{jobPost.location}</span>
        <span className="jpCompanyName">{jobPost.companyName}</span>
        <Link to={`/jobPost/${jobPost._id}`} className="link">
          <span className="viewMore">ViewMore...</span>
        </Link>
      </div>
      <hr className="jpHr" />
      <button className="fullTimeBut">Full Time</button>
    </div>
  );
}
export default JobPost;
