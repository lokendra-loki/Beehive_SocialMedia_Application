import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./allComments.scss";
import { Link } from "react-router-dom";

function AllComments({ setOpenAllCommentCon, comments }) {
  console.log(comments);
  return (
    <div className="allCommentsContainer">
      <h3 className="allComments">
        All Comments
        <ClearIcon
          className="allCommentClearIcon"
          onClick={() => setOpenAllCommentCon(false)}
        />
      </h3>

      {comments.map((comment, i) => (
        <Link key={i} to={`/profile/${comment.userID}`} className="link">
          <span index={i} className="comment1">
            <img src={comment.profilePic} alt="" className="commentImg" />
            {comment.fullName}
          </span>
          <span className="acViewProfile">{comment.comment}</span>
          <hr className="acHr" />
        </Link>
      ))}
    </div>
  );
}

export default AllComments;
