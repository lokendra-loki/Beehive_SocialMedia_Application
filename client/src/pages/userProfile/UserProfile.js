import React, { useContext, useEffect, useState } from 'react'
import "./userProfile.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import UserInfo from '../../components/userInfo/UserInfo';
import FeedPost from '../../components/feedPost/FeedPost';
import FeedPostCreate from '../../components/feedPostCreate/FeedPostCreate';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import LeftBar from '../../components/leftBar/LeftBar';
import UserInfoEdit from '../../components/userInfoEdit/UserInfoEdit';
// import axios from 'axios'
// import { AuthContext } from '../../context/authContext/AuthContext';



function UserProfile() {

    //To open the FeedPostCreateContainer
    const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false)

    //calling currentUser from AuthContext
    // const { user } = useContext(AuthContext)
    // console.log(user);

   

    return (
        <div className="userProfile">
            <Navbar />
            <div className="upWrapper">
                <div className="upCoverPicCon">
                    <img src="/assets/cover.jpeg" alt="" className="upCoverPic" />
                    <img src="/assets/profile.jpeg" alt="" className="upProfilePic" />
                </div>

                <div className="upBeforeSplit">
                    <div className="upLeftCon">
                        <LeftBar />


                    </div>
                    <div className="upCenterCon">


                        <div className="upRowIconCon">
                            <div className="upRowIconItem">
                                <Link to="/" className='link'>
                                    <HomeOutlinedIcon color="action" />
                                </Link>
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




                        <div className="upSmallWhatsOnYourMindCon">
                            <img src="assets/profile.jpeg" alt="" className="upTinyProfilePic" />
                            <input onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)} type="text" className="upOnYourMindInput" placeholder="What's on your mind Lokendra ?  Post photos / videos / text from here" />
                        </div>
                        {/* On Click ma yo container show hunxa */}
                        {showFeedPostCreateCon && <FeedPostCreate />}




                        <FeedPost />

                    </div>
                    <div className="upRightCon">
                        <UserInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}






export default UserProfile