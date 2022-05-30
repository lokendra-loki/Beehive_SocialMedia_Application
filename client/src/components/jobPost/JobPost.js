import React, { useState } from "react";
import { format } from "timeago.js";
import "./jobPost.scss";
import { Link } from "react-router-dom";
import DeleteAlert from "../deleteAlert/DeleteAlert";

function JobPost({ jobPost }) {
  //Open Close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <div className="jobPost">
      <img src="/assets/cover.jpeg" alt="" className="jobCompanyLogo" />
      <div className="jpInfoCon">
        <span className="jpJobTitle">{jobPost.position}</span>
        <span className="jpPostTime">{format(jobPost.createdAt)}</span>
        <span className="jpCompanyAddress">{jobPost.location}</span>
        <span className="jpCompanyName">{jobPost.companyName}</span>

        <div className="jobPostDeleteSaveCon">
          <button
            className="jpDelete"
            onClick={() => setShowDeleteAlert(!showDeleteAlert)}
          >
            Delete
          </button>
          <button className="jpDelete">Save</button>
          <Link to={`/jobPost/${jobPost._id}`} className="link">
            <span className="viewMore">ViewMore...</span>
          </Link>
        </div>
      </div>
      <hr className="jpHr" />
      {showDeleteAlert && <DeleteAlert />}
      <button className="fullTimeBut">Full Time</button>
    </div>
  );
}
export default JobPost;
