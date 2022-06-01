import React from "react";
import { format } from "timeago.js";
import "./blogLg.scss";

function BlogLg({ blog }) {
  console.log(blog);
  return (
    <div className="blogLg">
      <img src="/assets/cover.jpeg" alt="" className="blogLgImg" />
      <div className="blogLgWrapper">
        <div className="blogLgDateAndTimeRead">
          <span className="blogLgDate">{format(blog.createdAt)}</span>
          <span className="blogLgTimeRead">{blog.timeRead} min read</span>
          <span className="blogLgLocation">{blog.location}</span>
          <button className="blEditBut">Edit</button>
        </div>
        <span className="blogLgTitle">{blog.title}</span>
        <span className="blogLgAuthor">
          <span className="lgauthor">Author</span> : {blog.authorName}
        </span>
        <span className="blogDesc">{blog.desc}</span>
      </div>
      {/* <BlogEdit /> */}
    </div>
  );
}

export default BlogLg;
