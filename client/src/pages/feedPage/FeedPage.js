import React, { useState } from 'react'
import "./feedPage.scss"
// import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import Badge from '@mui/material/Badge';
import FeedPost from '../../components/feedPost/FeedPost';
import Navbar from '../../components/navbar/Navbar';
import LeftBar from '../../components/leftBar/LeftBar';
import FeedPostCreate from '../../components/feedPostCreate/FeedPostCreate';



function FeedPage() {


    //To open the FeedPostCreateContainer
    const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false)



    return (
        <div className="feedPage">
            <div className="fpWrapper">
                <Navbar />
                <div className="fpBeforeSplit">

                    <div className="fpLeftCon">
                        <LeftBar />
                    </div>

                    <div className="fpCenterCon">

                        <div className="smallWhatsOnYourMindCon">
                            <img src="assets/profile.jpeg" alt="" className="tinyProfilePic" />
                            <input onClick={()=>setShowFeedPostCreateCon(!showFeedPostCreateCon)} type="text" className="onYourMindInput"  placeholder="What's on your mind Lokendra ?  Post photos / videos / text from here"/>
                        </div>
                        {/* On Click ma yo container show hunxa */}
                        {showFeedPostCreateCon && <FeedPostCreate/>}









                        {/* <div className="fpRowIconCon">
                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <ChatOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <PeopleAltOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <OndemandVideoOutlinedIcon color="action" />
                                </Badge>
                            </div>
                        </div> */}
                        <FeedPost />
                    </div>
                    <div className="fpRightCon"></div>
                </div>
            </div>
        </div>
    )

}

export default FeedPage