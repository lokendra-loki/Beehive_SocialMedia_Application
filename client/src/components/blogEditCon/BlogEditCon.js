import React from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import "./blogEditCon.scss";

function BlogEditCon() {
  return (
    <div className="bEriteRightSide">
      <div className="bEWholeContainer">
        <span className="bETitle">
          Share Ideas And Experiences through Blog !
        </span>
        <hr className="bEHr" />
        <img src="/assets/cover.jpeg" alt="" className="bEImg" />

        <label className="brImgIconAndTxt" htmlFor="fileInput">
          <ImageSearchOutlinedIcon className="bEImgIcon" />
          <span className="bESelectImgTxt">Select Image</span>
        </label>
        <input type="file" id="fileInput" style={{ display: " none" }} />

        <form className="bEColumnCon">
          <span className="lwBlogTitle">Blog Title</span>
          <input type="text" className="bEBlogTitleInput" />

          <span className="lwBlogDesc lwBlogTitle">Blog Description</span>
          <input type="text" className="bEBlogDescInput" />

          <label className="lwBlogCategory lwBlogTitle">Location</label>
          <input type="text" className="bEBlogCategoryInput" />

          <label className="lwBlogTimeRead lwBlogTitle">Time to Read</label>
          <input type="text" className="bEBlogTimeReadInput" />

          <button className="bESubmmitBut" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogEditCon;
