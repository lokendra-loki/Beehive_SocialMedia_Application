import React, { useEffect } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./feedPostEditCon.scss";

function FeedPostEditCon() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //Fetch data from URL id
  const [postData, setPostData] = React.useState({});
  useEffect(() => {
    const fetchPostData = async () => {
      const res = await axios.get(`/userPosts/get/${path}`);
      setPostData(res.data);
    };
    fetchPostData();
  }, [path]);

  //Edit feedPost
  const [newDesc, setNewDesc] = React.useState(postData.desc);
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/userPosts/update/${path}`, {
        desc: newDesc,
      });
      window.location.replace("/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="feedPostEditContainer" onSubmit={handleEditSubmit}>
      <span className="fpecTitle">Edit your FeedPost here !</span>
      <hr className="fpecHr" />
      <img src="/assets/cover.jpeg" alt="" className="fpecImg" />

      <label className="fpecImgIconAndTxt" htmlFor="fileInput">
        <ImageSearchOutlinedIcon className="fpecImgIcon" />
        <span className="fpecSelectImgTxt">Select Image</span>
      </label>
      <input type="file" id="fileInput" style={{ display: " none" }} />

      <div className="fpecColumnCon">
        <span className="fpecBlogTitle ">Post Description</span>
        <input
          type="text"
          className="fpecBlogTitleInput  "
          defaultValue={postData.desc}
          onChange={(e) => setNewDesc(e.target.value)}
        />

        <button className="fpecSubmmitBut" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default FeedPostEditCon;
