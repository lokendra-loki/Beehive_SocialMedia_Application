import React from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import "./blogCreateCon.scss";

function BlogCreateCon() {
  return (
    <div className="blogCreateContainer">
      <form className="bccWholeContainer">
        <span className="bccTitle">
          Share Ideas And Experiences through Blog !
        </span>
        <hr className="bccHr" />
        <img src="/assets/cover.jpeg" alt="" className="bccImg" />

        <label className="bccImgIconAndTxt" htmlFor="fileInput">
          <ImageSearchOutlinedIcon className="bccImgIcon" />
          <span className="bccSelectImgTxt">Select Image</span>
        </label>
        <input type="file" id="fileInput" style={{ display: " none" }} />

        <div className="bccColumnCon">
          <span className="bccBlogTitle  bccBlogTitle1 ">Blog Title</span>
          <input
            type="text"
            className="bccBlogTitleInput  bccBlogTitleInput1"
          />

          <span className="bccBlogDesc bccBlogTitle1">Blog Description</span>
          <textarea
            type="text"
            className="bccBlogDescInput bEBlogTitleInput1"
          />

          <label className="bccBlogCategory bccBlogTitle1">Location</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
          />

          <label className="bccBlogCategory bccBlogTitle1">Author</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
          />

          <label className="bccBlogCategory bccBlogTitle1">Created Date</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
          />

          <label className="bccBlogTimeRead bccBlogTitle1">
            Time to Read (in minute)
          </label>
          <input
            type="number"
            min={1}
            max={60}
            className="bccBlogTimeReadInput bccBlogTitleInput1"
          />

          <button className="bccSubmmitBut" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCreateCon;
