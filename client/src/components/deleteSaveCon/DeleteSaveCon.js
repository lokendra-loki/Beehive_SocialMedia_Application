import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { Link } from "react-router-dom";
import "./deleteSaveCon.scss";
import axios from "axios";

function DeleteSaveCon({ id, currentUserDetail, postId }) {
  console.log(postId);

  //Delete post
  const handleDelete = async () => {
    try {
      await axios.delete(`/userPosts/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Bookmark post
  const [saved, setSaved] = useState(false);
  const handleBookmark = async () => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
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
      <div className="dscItem" onClick={handleDelete}>
        <DeleteForeverIcon className="dscIcon" />
        <span className="decSspan">Delete</span>
      </div>

      <div className="dscItem" onClick={() => handleBookmark()}>
        <BookmarkAddedIcon className="dscIcon" />
        <span className="decSspan">
          {currentUserDetail?.jobPostsBookmark?.includes(id) ? "Saved" : "Save"}
        </span>
      </div>

      <Link to={`/postEdit/${id}`} className="link">
        <div className="dscItem">
          <ModeEditTwoToneIcon className="dscIcon" />
          <span className="decSspan">Edit</span>
        </div>
      </Link>
    </div>
  );
}

export default DeleteSaveCon;
