import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "timeago.js";
import "./blog.scss";
import BlogDeleteAlert from "../blogDeleteAlert/BlogDeleteAlert";
import { useState } from "react";

function Blog({ blog }) {
  const [showBlogDeleteAlert, setShowBlogDeleteAlert] = useState(false);

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
        <Link to={`/blogRead/${blog._id}`} className="link">
          <span className="blogContinueReading">Continue reading...</span>
        </Link>
        {showBlogDeleteAlert && (
          <BlogDeleteAlert
            id={blog._id}
            setShowBlogDeleteAlert={setShowBlogDeleteAlert}
          />
        )}

        <div className="blogDeleteEditCon">
          <button
            className="blogDelete blogDeleteEditBut"
            onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
          >
            <DeleteOutlineIcon className="blogDEIcon" />
            Delete
          </button>

          <Link to={`/blogEdit/${blog._id}`} className="link">
            <button className="blogEdit blogDeleteEditBut">
              <EditIcon className="blogDEIcon" />
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
