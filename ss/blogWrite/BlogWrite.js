import React, { useContext, useState } from "react";
import Category from "../../client/src/components/category/Category";
import LeftBar from "../../client/src/components/leftBar/LeftBar";
import Navbar from "../../client/src/components/navbar/Navbar";
import RecentPost from "../../client/src/components/recentPost/RecentPost";
import "./blogWrite.scss";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { AuthContext } from "../../client/src/context/authContext/AuthContext";
import axios from "axios";
// import BlogEdit from "../../components/blogEdi/BlogEdit";

function BlogWrite() {
  const { user } = useContext(AuthContext);
  //Create Blog
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      author: user.fullName,
      title,
      desc,
      timeRead,
      location,
    };
    console.log(newBlog);

    try {
      const res = await axios.post("/blogs/create", newBlog);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="blogWrite">
      <Navbar />
      <div className="bWriteHeader">This is header</div>

      <div className="bWriteWrapper">
        <div className="bWriteLeftSide">
          <LeftBar />
          <RecentPost />
          <Category />
        </div>

        <div className="bWriteRightSide">
          <div className="bwWholeContainer">
            <span className="bwTitle">
              Share Ideas And Experiences through Blog !
            </span>
            <hr className="bwHr" />
            <img src="/assets/cover.jpeg" alt="" className="bwImg" />

            <label className="brImgIconAndTxt" htmlFor="fileInput">
              <ImageSearchOutlinedIcon className="bwImgIcon" />
              <span className="bwSelectImgTxt">Select Image</span>
            </label>
            <input type="file" id="fileInput" style={{ display: " none" }} />

            <form className="bwColumnCon" onSubmit={handleSubmit}>
              <span className="lwBlogTitle">Blog Title</span>
              <input
                type="text"
                className="bwBlogTitleInput"
                onChange={(e) => setTitle(e.target.value)}
              />

              <span className="lwBlogDesc lwBlogTitle">Blog Description</span>
              <input
                type="text"
                className="bwBlogDescInput"
                onChange={(e) => setDesc(e.target.value)}
              />

              <label className="lwBlogCategory lwBlogTitle">Location</label>
              <input
                type="text"
                className="bwBlogCategoryInput"
                onChange={(e) => setLocation(e.target.value)}
              />

              <label className="lwBlogTimeRead lwBlogTitle">Time to Read</label>
              <input
                type="text"
                className="bwBlogTimeReadInput"
                onChange={(e) => setTimeRead(e.target.value)}
              />

              <button className="bwSubmmitBut" type="submit">
                Submit Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogWrite;
