import React, { useEffect, useState } from 'react'
import "./feedPage.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import FeedPost from '../../components/feedPost/FeedPost';
import Navbar from '../../components/navbar/Navbar';
import LeftBar from '../../components/leftBar/LeftBar';
import FeedPostCreate from '../../components/feedPostCreate/FeedPostCreate';
import RecentPost from '../../components/recentPost/RecentPost';
import Category from '../../components/category/Category';
import { Link } from 'react-router-dom'
import axios from 'axios'


function FeedPage() {

    //To open the FeedPostCreateContainer
    const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false)


    // //Fetching All UserPosts 
    // const [userPosts, setUserPosts] = useState[{}]
    // useEffect(() => {
    //     const fetchUserPosts = async () => {
    //         const res = await axios.get("/userPosts/getAll")
    //         console.log(res.data)

    //     }
    //     fetchUserPosts()
    // })



    return (
        <div className="feedPage">
            <div className="fpWrapper">
                <Navbar />
                <div className="fpBeforeSplit">

                    <div className="fpLeftCon">
                        <LeftBar />
                    </div>

                    <div className="fpCenterCon">

                        <div className="fpRowIconCon">
                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>


                            <div className="fpRowIconItem">
                                <Link to="/profile">
                                    <PersonOutlineOutlinedIcon color="action" />
                                </Link>
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
                        </div>





                        <div className="smallWhatsOnYourMindCon">
                            <img src="assets/profile.jpeg" alt="" className="tinyProfilePic" />
                            <input onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)} type="text" className="onYourMindInput" placeholder="What's on your mind Lokendra ?  Post photos / videos / text from here" />
                        </div>
                        {/* On Click ma yo container show hunxa */}
                        {showFeedPostCreateCon && <FeedPostCreate />}













                        <FeedPost />
                    </div>
                    <div className="fpRightCon">
                        <Category />
                        <RecentPost />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FeedPage