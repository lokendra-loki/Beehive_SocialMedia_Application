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

  return (
    <form className="feedPostEditContainer">
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
        <textarea
          type="text"
          className="fpecBlogTitleInput  "
          defaultValue={postData.desc}
        />

        <button className="fpecSubmmitBut" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default FeedPostEditCon;
