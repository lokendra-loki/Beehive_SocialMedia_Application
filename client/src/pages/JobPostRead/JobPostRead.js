import React, { useEffect, useState } from 'react'
import "./jobPostRead.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import UserInfo from '../../components/userInfo/UserInfo';
// import JobPost from '../../components/jobPost/JobPost';
import JobPostLg from '../../components/jobPPostLg/JobPostLg';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'
import { useLocation } from 'react-router'
import LeftBar from '../../components/leftBar/LeftBar';




function JobPostRead() {

    //Fetching JobPost data from URL id
    const location = useLocation()
    console.log(location);
    console.log(location.pathname);
    const path = location.pathname.split("/")[2]
    console.log(path);

    const [jobPost, setJobPost] = useState({})
    useEffect(() => {
        const fetchJobPost = async () => {
            const res = await axios.get(`/jobPosts/get/${path}`)
            console.log(res.data)
            setJobPost(res.data)
        }
        fetchJobPost()
    }, [path])










    return (
        <div className="jobPostRead">
            <div className="jprWrapper">
                <Navbar />
                {/* <div className="jprCoverPicCon">
                    <img src="/assets/cover.jpeg" alt="" className="jprCoverPic" />
                    <img src="/assets/profile.jpeg" alt="" className="jprProfilePic" />
                </div> */}

                <div className="jprBeforeSplit">
                    <div className="jprLeftCon">
                        <LeftBar/>
                    </div>

                    <div className="jprCenterCon">
                        <div className="jprRowIconCon">
                            <div className="jprRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jprRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <ChatOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jprRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jprRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <PeopleAltOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jprRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <OndemandVideoOutlinedIcon color="action" />
                                </Badge>
                            </div>
                        </div>

                        

                
                        <JobPostLg jobPost={jobPost}/>
                      




                    </div>
                    <div className="jprRightCon"></div>
                </div>
            </div>
        </div>
    )
}

export default JobPostRead