import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import DeleteSaveCon from "../deleteSaveCon/DeleteSaveCon";
import { useAPI } from "../../context/userDetailContext";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import "./feedPost.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import CommentCon from "../commentCon/CommentCon";
import AllComments from "../allComments/AllComments";

function FeedPost({ post, privatePost }) {
  const { user } = useContext(AuthContext);
  const [showDeleteSaveCon, setShowDeleteSaveCon] = useState(false);
  const { currentUserDetail } = useAPI();

  //Like dislike
  const [postLiked, setPostLiked] = useState(false);
  const handleLike = async (id) => {
    try {
      const res = await axios.put(`/userPosts/like/${id}`, {
        userId: user._id,
      });
      setPostLiked(true);
      window.location.reload();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const [liked, setLiked] = useState(false);
  const handleLikeDislike = async (id) => {
    try {
      const res = await axios.put(`/userPosts/like/${id}`, {
        userId: user._id,
      });
      setLiked(true);
      window.location.reload();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const [showCommentCon, setShowCommentCon] = useState(false);
  const [openAllCommentCon, setOpenAllCommentCon] = useState(false);

  //Fetching comments of a post
  const [comments, setComments] = useState([{}]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.post("comments/getComments", {
        postID: post._id,
      });
      setComments(res.data);
    };
    fetchComments();
  }, [post]);
  console.log(comments);

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
          {showCommentCon && (
            <CommentCon setShowCommentCon={setShowCommentCon} />
          )}
          <div className="allCommentWrapper">
            {openAllCommentCon && (
              <AllComments
                setOpenAllCommentCon={setOpenAllCommentCon}
                comments={comments}
              />
            )}
          </div>
          <div className="fpIconsRow">
            <div className="fpLikeDislikeIconWrapper">
              <div
                className="fpIconsItemColumn"
                onClick={() => handleLike(post._id)}
              >
                <ThumbUpOutlined className="fpIconsItemIcon" />
                <span className="fpIconsItemTxt">
                  {" "}
                  {post?.likes?.length} Likes
                </span>
              </div>

              {/* <div className="fpIconsItemColumn ">
                <ThumbDownAltOutlinedIcon className="fpIconsItemIcon" />
                <span className="fpIconsItemTxt"> 19 dislikes</span>
              </div> */}
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setShowCommentCon(!showCommentCon)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">comments</span>
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setOpenAllCommentCon(true)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">Total 4 comments</span>
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
              <div
                className="fpIconsItemColumn"
                onClick={() => handleLikeDislike(privatePost?._id)}
              >
                <ThumbUpOutlined className="fpIconsItemIcon" />
                <span className="fpIconsItemTxt">
                  {" "}
                  {privatePost?.likes?.length} Likes
                </span>
              </div>

              {/* <div className="fpIconsItemColumn ">
                <ThumbDownAltOutlinedIcon className="fpIconsItemIcon" />
                <span className="fpIconsItemTxt"> 19 dislikes</span>
              </div> */}
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
