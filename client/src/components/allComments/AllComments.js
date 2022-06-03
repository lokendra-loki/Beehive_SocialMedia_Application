import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./allComments.scss";

function AllComments({ setOpenAllCommentCon }) {
  return (
    <div className="allCommentsContainer">
      <h3 className="allComments">
        All Comments
        <ClearIcon
          className="allCommentClearIcon"
          onClick={() => setOpenAllCommentCon(false)}
        />
      </h3>
      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>

      <span className="comment1">
        <img src="" alt="" className="commentImg" />
        Nice Picture1
      </span>
    </div>
  );
}

export default AllComments;
