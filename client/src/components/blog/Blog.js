import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
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
        <Link to={`/blogRead/${blog._id}`} className="link">
          <span className="blogContinueReading">Continue reading...</span>
        </Link>

        <div className="blogDeleteEditCon">
          <button className="blogDelete blogDeleteEditBut">
            <DeleteOutlineIcon className="blogDEIcon" />
            Delete
          </button>
          <button className="blogEdit blogDeleteEditBut">
            <EditIcon className="blogDEIcon" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
