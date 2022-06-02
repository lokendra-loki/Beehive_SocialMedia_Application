import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined"
import DeleteSaveCon from "../deleteSaveCon/DeleteSaveCon";
import { useAPI } from "../../context/userDetailContext";
import { useState } from "react";
import { format } from "timeago.js";
import "./feedPost.scss";

function FeedPost({ post }) {
  const [showDeleteSaveCon, setShowDeleteSaveCon] = useState(false);
  const { currentUserDetail } = useAPI();
  

  return (
    <div className="feedPost">
      <div className="fpRow1">
        <img src="/assets/cover.jpeg" alt="" className="fpProfilePic" />
        <div
          className="fpProfileInfoColumn"
          onClick={() => setShowDeleteSaveCon(false)}
        >
          <span className="fpUsername">{post.username}</span>
          <span className="fpProfession">{post.profession}</span>
          <span className="fpTime">{format(post.createdAt)}</span>
        </div>
        <div
          className="fpMoreIconColumn"
          onClick={() => setShowDeleteSaveCon(!showDeleteSaveCon)}
        >
          <MoreVertOutlinedIcon />
        </div>
      </div>
      <div className="deleteSaveConWrapper">
        {showDeleteSaveCon && (
          <DeleteSaveCon id={post._id} currentUserDetail={currentUserDetail} />
        )}
      </div>

      <span className="fpDesc" onClick={() => setShowDeleteSaveCon(false)}>
        {post.desc}
      </span>
      <img
        src="/assets/cover.jpeg"
        alt=""
        className="fpPostImg"
        onClick={() => setShowDeleteSaveCon(false)}
      />
      <hr className="fpHr" />
      <div className="fpIconsRow">
        <div className="fpLikeDislikeIconWrapper">
          <div className="fpIconsItemColumn">
            <ThumbUpOutlined className="fpIconsItemIcon" />
            <span className="fpIconsItemTxt"> 45Likes</span>
          </div>

          <div className="fpIconsItemColumn ">
            <ThumbDownAltOutlinedIcon className="fpIconsItemIcon" />
            <span className="fpIconsItemTxt"> 19 dislikes</span>
          </div>
        </div>

        <div className="fpIconsItemColumn">
          <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
          <span className="fpIconsItemTxt"> 7 comments</span>
        </div>

        <div className="fpIconsItemColumn">
          <ShareOutlinedIcon className="fpIconsItemIcon" />
          <span className="fpIconsItemTxt"> 4 share</span>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
