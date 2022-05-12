import "./blog.scss"
import { Link } from "react-router-dom";



function Blog({ blog }) {
    return (
        <div className='blog'>
            <img src={blog.img || "/assets/cover.jpeg"} alt="" className="blogImg" />

            <div className="blogInsideCon">
                <div className="blogDateAndTimeRead">
                    <span className="blogDate">{new Date(blog.createdAt).toDateString()}</span>
                    <span className="blogTimeRead">{blog.timeRead} min</span>
                </div>
                <span className="blogTitle">{blog.title} </span>
                <div className="blogAuthorAndLocation">
                    <span className="blogAuthor"><span className='author'>Author</span> : {blog.author}</span>
                    <span className="blogLocation">{blog.location} </span>
                </div>
                <span className="blogDesc">{blog.desc}</span>
                <hr className='blogHr' />


                {/* Go to blogRead page page with blog Id */}
                <Link to={`/blogRead/${blog._id}`} className="link">
                    <span className="blogContinueReading"  >Continue reading...</span>
                </Link>

            </div>
        </div>
    )
}

export default Blog