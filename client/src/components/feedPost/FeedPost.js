import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import DeleteSaveCon from "../deleteSaveCon/DeleteSaveCon";
import { useAPI } from "../../context/userDetailContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { format } from "timeago.js";
import "./feedPost.scss";

function FeedPost({ post, privatePost }) {
  const [showDeleteSaveCon, setShowDeleteSaveCon] = useState(false);
  const { currentUserDetail } = useAPI();

  return (
    <>
      {post ? (
        <div className="feedPost">
          <div className="fpRow1">
            <Link to={`/profile/${post?.userID}`} className="link">
              <img src="/assets/cover.jpeg" alt="" className="fpProfilePic" />
            </Link>
            <div
              className="fpProfileInfoColumn"
              onClick={() => setShowDeleteSaveCon(false)}
            >
              <span className="fpUsername">{post?.fullName}</span>
              <span className="fpProfession">{post?.profession}</span>
              <span className="fpTime">{format(post?.createdAt)}</span>
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
              <DeleteSaveCon
                id={post?._id}
                currentUserDetail={currentUserDetail}
              />
            )}
          </div>

          <span className="fpDesc" onClick={() => setShowDeleteSaveCon(false)}>
            {post?.desc}
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
      ) : privatePost ? (
        <div className="feedPost">
          <div className="fpRow1">
            <Link to={`/profile/${privatePost?.userID}`} className="link">
              <img src="/assets/cover.jpeg" alt="" className="fpProfilePic" />
            </Link>
            <div
              className="fpProfileInfoColumn"
              onClick={() => setShowDeleteSaveCon(false)}
            >
              <span className="fpUsername">{privatePost?.fullName}</span>
              <span className="fpProfession">{privatePost?.profession}</span>
              <span className="fpTime">{format(privatePost?.createdAt)}</span>
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
              <DeleteSaveCon
                id={privatePost?._id}
                currentUserDetail={currentUserDetail}
              />
            )}
          </div>

          <span className="fpDesc" onClick={() => setShowDeleteSaveCon(false)}>
            {privatePost?.desc}
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
      ) : null}
    </>
  );
}

export default FeedPost;
