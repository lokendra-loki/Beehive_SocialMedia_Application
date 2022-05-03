import React from 'react'
import Category from '../../components/category/Category'
import LeftBar from '../../components/leftBar/LeftBar'
import Navbar from '../../components/navbar/Navbar'
import RecentPost from '../../components/recentPost/RecentPost'
import "./blogWrite.scss"
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';


function BlogWrite() {
    return (
        <div className='blogWrite'>
            <Navbar />
            <div className="bWriteHeader">
                This is header
            </div>

            <div className="bWriteWrapper">
                <div className="bWriteLeftSide">
                    <LeftBar />
                    <RecentPost />
                    <Category />

                </div>

                <div className="bWriteRightSide">

                    <div className="bwWholeContainer">
                        <span className="bwTitle">Share Ideas And Experiences through Blog !</span>
                        <hr className="bwHr" />
                        <img src="/assets/cover.jpeg" alt="" className="bwImg" />

                      
                            <label className='brImgIconAndTxt' htmlFor="fileInput">
                                <ImageSearchOutlinedIcon className="bwImgIcon" />
                                <span className='bwSelectImgTxt'>Select Image</span>
                            </label>
                            <input type="file" id='fileInput' style={{ display: " none" }} />


                            <div className="bwColumnCon">
                                <span className="lwBlogTitle">Blog Title</span>
                                <input type="text" className="bwBlogTitleInput" />

                                <span className="lwBlogDesc lwBlogTitle">Blog Description</span>
                                <input type="text" className="bwBlogDescInput" />

                                <label className="lwBlogCategory lwBlogTitle">Category</label>
                                <input type="text" className="bwBlogCategoryInput" />

                                <label className="lwBlogTimeRead lwBlogTitle">Time to Read</label>
                                <input type="text" className="bwBlogTimeReadInput" />

                                <label className="lwBlogAuthor lwBlogTitle">Loki Chaulagain</label>
                                <input type="text" className="bwBlogAuthorInput" />

                                <button className="bwSubmmitBut">Submit Blog</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default BlogWrite