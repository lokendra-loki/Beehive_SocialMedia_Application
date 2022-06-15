import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { Link } from "react-router-dom";
import "./deleteSaveCon.scss";
import axios from "axios";
import { useAPI } from "../../context/userDetailContext";
import { AuthContext } from "../../context/authContext/AuthContext";

function DeleteSaveCon({ postId }) {
  const { currentUserDetail } = useAPI();
  const { user } = useContext(AuthContext);

  //Delete a feed post
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`/userPosts/delete/${postId}`);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //
  const [feedPost, setFeedPost] = useState([{}]);
  useEffect(() => {
    const getFeedPost = async () => {
      try {
        const res = await axios.get(`/userPosts/get/${postId}`);
        setFeedPost(res.data);
      } catch (error) {}
    };
    getFeedPost();
  }, [postId]);
  console.log(feedPost);

  //Bookmark post
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const handleBookmark = async () => {
    setSaving(true);
    try {
      await axios.put(`/userDetails/bookmark/${postId}`, {
        userDetailId: currentUserDetail?._id,
      });
      setSaved(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deleteSaveContainer">
      {user._id === feedPost.userID && (
        <div className="dscItem" onClick={handleDelete}>
          <DeleteForeverIcon className="dscIcon" />
          <span className="decSspan">
            {" "}
            {deleting ? "Deleting..." : "Delete"}
          </span>
        </div>
      )}
      <div className="dscItem" onClick={() => handleBookmark()}>
        <BookmarkAddedIcon className="dscIcon" />
        <span className="decSspan">
          {currentUserDetail?.jobPostsBookmark?.includes(postId)
            ? "Saved"
            : saving
            ? "Saving..."
            : "Save"}
        </span>
      </div>

      <Link to={`/postEdit/${postId}`} className="link">
        <div className="dscItem">
          <ModeEditTwoToneIcon className="dscIcon" />
          <span className="decSspan">Edit</span>
        </div>
      </Link>
    </div>
  );
}

export default DeleteSaveCon;
