import React from 'react'
import "./userProfile.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import UserInfo from '../../components/userInfo/UserInfo';
import JobPost from '../../components/jobPost/JobPost';
import JobPostLg from '../../components/jobPPostLg/JobPostLg';
import FeedPost from '../../components/feedPost/FeedPost';
import FeedPostCreate from '../../components/feedPostCreate/FeedPostCreate';


function UserProfile() {





    return (
        <div className="userProfile">
            <div className="upWrapper">
                <div className="upCoverPicCon">
                    <img src="/assets/cover.jpeg" alt="" className="upCoverPic" />
                    <img src="/assets/profile.jpeg" alt="" className="upProfilePic" />
                </div>







                <div className="upBeforeSplit">
                    <div className="upLeftCon">
                        <UserInfo />
                    </div>
                    <div className="upCenterCon">
                        <div className="upRowIconCon">
                            <div className="upRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="upRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <ChatOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="upRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="upRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <PeopleAltOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="upRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <OndemandVideoOutlinedIcon color="action" />
                                </Badge>
                            </div>
                        </div>


                        {/* job post */}
                        <JobPost/>
                       
                        
                        <JobPostLg/>
                        <FeedPost/>
                        <FeedPostCreate/>
                        

                    </div>
                    <div className="upRightCon"></div>
                </div>







            </div>

        </div>
    )

}






export default UserProfile