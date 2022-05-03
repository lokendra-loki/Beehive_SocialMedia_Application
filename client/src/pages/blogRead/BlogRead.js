import React from 'react'
import BlogLg from '../../components/blogLg/BlogLg'
import LeftBar from '../../components/leftBar/LeftBar'
import Navbar from '../../components/navbar/Navbar'
import RecentPost from '../../components/recentPost/RecentPost'
import "./blogRead.scss"


function BlogRead() {
  return (
    <div className='blogRead'>
      <Navbar />
      <div className="brHeader">
        This is header
      </div>

      <div className="brWrapper">
        <div className="brLeftSide">
          <LeftBar />
          <RecentPost/>
        </div>

        <div className="brRightSide">
          <BlogLg />
          
        </div>
      </div>
    </div>
  )
}

export default BlogRead