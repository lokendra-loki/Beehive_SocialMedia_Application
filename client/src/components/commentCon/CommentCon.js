import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import "./commentCon.scss";

function CommentCon({ setShowCommentCon }) {
  return (
    <div className="commentContainer">
      <input type="text" className="commentInput" placeholder="Comment feature is under maintenance" />
      <div className="clearSendIcon">
        <ClearIcon
          className="commentSendIcon"
          onClick={() => setShowCommentCon(false)}
        />
        <SendIcon className="commentSendIcon" />
      </div>
    </div>
  );
}

export default CommentCon;
