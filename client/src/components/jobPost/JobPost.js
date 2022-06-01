import React, { useState } from "react";
import { format } from "timeago.js";
import "./jobPost.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteAlert from "../deleteAlert/DeleteAlert";
import { useAPI } from "../../context/userDetailContext";

function JobPost({ jobPost }) {
  const { currentUserDetail } = useAPI();

  //Bookmark
  const [bookmarked, setBookmarked] = useState(false);
  const handleBookmark = async (id) => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
        userDetailId: currentUserDetail?._id,
      });
      setBookmarked(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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

          <button
            className="jpDelete"
            onClick={() => handleBookmark(jobPost?._id)}
          >
            {currentUserDetail?.jobPostsBookmark?.includes(jobPost?._id)
              ? "Saved"
              : "Save"}
          </button>

          <Link to={`/jobPost/${jobPost._id}`} className="link">
            <span className="viewMore">ViewMore...</span>
          </Link>
        </div>
      </div>
      <hr className="jpHr" />
      {showDeleteAlert && (
        <DeleteAlert setShowDeleteAlert={setShowDeleteAlert} id={jobPost._id} />
      )}
      <button className="fullTimeBut">
        {jobPost.jobType === "Full Time"
          ? "Full Time"
          : jobPost.jobType === "Part Time"
          ? "Part Time"
          : "Contract"}
      </button>
    </div>
  );
}
export default JobPost;
