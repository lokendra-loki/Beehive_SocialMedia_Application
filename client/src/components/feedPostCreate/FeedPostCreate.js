import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import React, { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useAPI } from "../../context/userDetailContext";
import axios from "axios";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./feedPostCreate.scss";

function FeedPostCreate({ setShowFeedPostCreateCon, setShowFeedCreateCon }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();

  //Create UserFeed Post
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + "-" + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //new post
          const newPost = {
            userID: user._id,
            fullName: user.username,
            profession: currentUserDetail.profession,
            profilePic: currentUserDetail.profilePic,
            desc,
            postImg: downloadURL,
          };
          try {
            const res = axios.post("/userPosts/create", newPost);
            console.log(res.data);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <form className="feedPostCreate" onSubmit={handleSubmit}>
      {path ? (
        <div className="fpcRow1">
          <div
            className="fpcRow1IconAndBackTxt"
            onClick={() => setShowFeedCreateCon(false)}
          >
            <ArrowBackIcon className="fpcRow1Icon" />
            <span className="fpcBack">Back</span>
          </div>
          <button className="fpcPost">Post</button>
        </div>
      ) : (
        <div className="fpcRow1">
          <div
            className="fpcRow1IconAndBackTxt"
            onClick={() => setShowFeedPostCreateCon(false)}
          >
            <ArrowBackIcon className="fpcRow1Icon" />
            <span className="fpcBack">Back</span>
          </div>
          <button className="fpcPost">Post</button>
        </div>
      )}

      <hr className="fpcHr" />

      <div className="fpcRow2">
        <img src="/assets/profile.jpeg" alt="" className="fpcProfilePic" />
        <span className="fpcUsername">Loki Chaulagain</span>
      </div>

      <div className="fpcwhatsOnMindAndSelectedItemCon">
        <input
          type="text"
          className="fpcwhatsOnMind"
          placeholder="What's on your mind ?"
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="fpcSelectedItemList">
          <div className="fpcSelectedItemCon">1</div>
        </div>
      </div>

      <label className="fpcImgVideoInput" htmlFor="fileInput1">
        <PhotoSizeSelectActualOutlinedIcon className="fpcImgIcon" />
        <span className="fpcSelectImgTxt">Image</span>
      </label>
      <input
        type="file"
        id="fileInput1"
        style={{ display: " none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="fpcPostBut" type="submit">
        Post
      </button>
    </form>
  );
}

export default FeedPostCreate;
