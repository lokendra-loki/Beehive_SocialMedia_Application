import { format } from "timeago.js";
import "./blog.scss";

function Blog({ blog }) {
  return (
    <div className="blog">
      <img src="/assets/cover.jpeg" alt="" className="blogImg" />

      <div className="blogInsideCon">
        <div className="blogDateAndTimeRead">
          <span className="blogDate">{format(blog.createdAt)}</span>
          <span className="blogTimeRead">{blog.timeRead}</span>
        </div>
        <span className="blogTitle">{blog.title} </span>
        <div className="blogAuthorAndLocation">
          <span className="blogAuthor">
            <span className="author">Author</span> : {blog.authorName}
          </span>
          <span className="blogLocation">{blog.location} </span>
        </div>
        {/* <span className="blogDesc">{blog.desc}</span> */}
        <hr className="blogHr" />

        <span className="blogContinueReading">Continue reading...</span>
      </div>
    </div>
  );
}

export default Blog;
