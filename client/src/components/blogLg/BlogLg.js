import React, { useState } from "react";
import { format } from "timeago.js";
import BlogDeleteAlert from "../blogDeleteAlert/BlogDeleteAlert";
import "./blogLg.scss";

function BlogLg({ blog }) {
  const [showBlogDeleteAlert, setShowBlogDeleteAlert] = useState(false);

  return (
    <div className="blogLg">
      <img src="/assets/cover.jpeg" alt="" className="blogLgImg" />
      <div className="blogLgWrapper">
        <div className="blogLgDateAndTimeRead">
          {showBlogDeleteAlert && <BlogDeleteAlert id={blog._id} />}
          <span className="blogLgDate">{format(blog?.createdAt)}</span>
          <span className="blogLgTimeRead">{blog?.timeRead} min read</span>
          <span className="blogLgLocation">{blog?.location}</span>
          <div className="blEditDeleteCon">
            <button className="blogLgEdit">Edit</button>
            <button
              className="blogLgDelete"
              onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
            >
              Delete
            </button>
          </div>
        </div>
        <span className="blogLgTitle">{blog?.title}</span>
        <span className="blogLgAuthor">
          <span className="lgauthor">Author</span> : {blog?.authorName}
        </span>
        <span className="blogDesc">{blog?.desc}</span>
      </div>
    </div>
  );
}

export default BlogLg;
