import React, { useState } from "react";
import BlogEdit from "../blogEdi/BlogEdit";
import "./blogLg.scss";

function BlogLg({ blog }) {
  //Edit Blog Container Open

  return (
    <div className="blogLg">
      <img
        src={blog.img || "/assets/cover.jpeg"}
        alt=""
        className="blogLgImg"
      />
      <div className="blogLgWrapper">
        <div className="blogLgDateAndTimeRead">
          <span className="blogLgDate">
            {new Date(blog.createdAt).toDateString()}
          </span>
          <span className="blogLgTimeRead">{blog.timeRead}min read</span>
          <span className="blogLgLocation">{blog.location}</span>
          <button className="blEditBut">Edit</button>
        </div>
        <span className="blogLgTitle">{blog.title}</span>
        <span className="blogLgAuthor">
          <span className="lgauthor">Author</span> : {blog.author}
        </span>
        <span className="blogDesc">{blog.desc}</span>
      </div>
      <BlogEdit />
    </div>
  );
}

export default BlogLg;
