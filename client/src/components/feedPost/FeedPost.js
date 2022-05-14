import "./feedPost.scss";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import { format } from "timeago.js";

function FeedPost({ feedPost }) {
  console.log(feedPost);

  return (
    <div className="feedPost">
      <div className="fpRow1">
        <img src="/assets/cover.jpeg" alt="" className="fpProfilePic" />
        <div className="fpProfileInfoColumn">
          <span className="fpUsername">{feedPost.fullName}</span>
          <span className="fpProfession">{feedPost.profession}</span>
          <span className="fpTime">{format(feedPost.createdAt)}</span>
        </div>
        <div className="fpMoreIconColumn">
          <MoreVertOutlinedIcon />
        </div>
      </div>
      <span className="fpDesc">{feedPost.desc}</span>
      <img src="/assets/cover.jpeg" alt="" className="fpPostImg" />
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
