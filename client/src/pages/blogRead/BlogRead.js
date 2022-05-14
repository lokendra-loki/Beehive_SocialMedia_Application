import React, { useEffect } from "react";
import BlogLg from "../../components/blogLg/BlogLg";
import Category from "../../components/category/Category";
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import RecentPost from "../../components/recentPost/RecentPost";
import { useLocation } from "react-router";
import "./blogRead.scss";
import axios from "axios";

function BlogRead() {
  //Fetching data from the URL id
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [blog, setBlog] = React.useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/blogs/get/${path}`);
      console.log(res.data);
      setBlog(res.data);
    };
    fetchPost();
  }, [path]);

  return (
    <div className="blogRead">
      <Navbar />
      <div className="brHeader">This is header</div>

      <div className="brWrapper">
        <div className="brLeftSide">
          <LeftBar />
          <RecentPost />
          <Category />
        </div>

        <div className="brRightSide">
          <BlogLg blog={blog} />
        </div>
      </div>
    </div>
  );
}

export default BlogRead;
