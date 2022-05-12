import React from 'react'
import "./blogLg.scss"



function BlogLg({ blog }) {
    return (
        <div className='blogLg'>
            <img src={blog.img || "/assets/cover.jpeg"} alt="" className="blogLgImg" />
            <div className="blogLgWrapper">
                <div className="blogLgDateAndTimeRead">
                    <span className="blogLgDate">{new Date(blog.createdAt).toDateString()}</span>
                    <span className="blogLgTimeRead">{blog.timeRead}min read</span>
                    <span className="blogLgLocation">{blog.location}</span>
                </div>
                <span className="blogLgTitle">{blog.title}</span>
                <span className="blogLgAuthor"><span className='lgauthor'>Author</span> : {blog.author}</span>
                <span className="blogDesc">{blog.desc}</span>
            </div>
        </div>
    )
}

export default BlogLg