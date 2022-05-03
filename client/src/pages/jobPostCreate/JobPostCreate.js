import React from 'react'
import Category from '../../components/category/Category'
import LeftBar from '../../components/leftBar/LeftBar'
import Navbar from '../../components/navbar/Navbar'
import RecentPost from '../../components/recentPost/RecentPost'
import "./jobPostCreate.scss"
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';


function JobPostCreate() {
    return (
        <div className='jobPostCreate'>
            <Navbar />
            <div className="jpcHeader">
                This is header
            </div>

            <div className="jpcWrapper">
                <div className="jpcLeftSide">
                    <LeftBar />
                    <RecentPost />
                    <Category />

                </div>

                <div className="jpcRightSide">

                    <div className="jpcWholeContainer">
                        <span className="jpcTitle">Post job requirements here!</span>
                        <hr className="jpcHr" />
                        <img src="/assets/cover.jpeg" alt="" className="jpcImg" />


                        <label className='jpcIconAndTxt' htmlFor="fileInput">
                            <ImageSearchOutlinedIcon className="jpcImgIcon" />
                            <span className='jpcSelectImgTxt'>Select company logo Image</span>
                        </label>
                        <input type="file" id='fileInput' style={{ display: " none" }} />


                        <div className="jpcColumnCon">
                            <span className="jpcJobTitle jpc">Job Title</span>
                            <input type="text" className="jpcJobTitleInput jpcInput" />

                            <span className="jpcCompanyName jpc">Company Name</span>
                            <input type="text" className="jpcCompanyNameInput jpcInput" />


                            <span className="jpcCompanyLocation jpc">Company Location</span>
                            <input type="text" className="jpcCompanyLocationInput jpcInput" />

                            <span className="jpcRemotrorOffiline jpc">remote/offline</span>
                            <input type="text" className="jpcRemotrorOffilineInput jpcInput" />

                            <span className="jpcNoOfEmployee jpc">No of Employee</span>
                            <input type="text" className="jpcNoOfEmployeeInput jpcInput" />


                            <span className="jpcAboutTheJob jpc">About The Job</span>
                            <input type="text" className="jpcAboutTheJobInput jpcInput" />


                            <span className="jpcAboutTheCompany jpc">About The Company</span>
                            <input type="text" className="jpcAboutTheCompanyInput jpcInput" />

                            <span className="jpcAboutTheRole jpc">About The Role</span>
                            <input type="text" className="jpcAboutTheRoleInput jpcInput" />


                            <span className="jpcRequirements jpc">Requirements</span>
                            <input type="text" className="jpcRequirementsInput jpcInput" />


                            <button className="jpcPostBut">Create Job</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobPostCreate