import React, { useEffect, useState } from "react";
import Blog from "../../components/blog/Blog";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./blogs.scss";
import LeftBar from "../../components/leftBar/LeftBar";
import RecentPost from "../../components/recentPost/RecentPost";
import Category from "../../components/category/Category";

function Blogs() {
  //Fetching all blogs
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/blogs/getAll");
      console.log(res.data);
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogs">
      <Navbar />
      <div className="header">This is header</div>
      <div className="blogsWrapper">
        <div className="blogsLeftSide">
          <LeftBar />
          <RecentPost />
          <Category />
        </div>

        <div className="blogsRightSide">
          {blogs.map((blog, key) => (
            <Blog key={key} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
