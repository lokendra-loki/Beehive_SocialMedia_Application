import React from 'react'
import "./userInfo.scss"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NetworkWifi2BarIcon from '@mui/icons-material/NetworkWifi2Bar';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function UserInfo() {
    return (
        <div className="userInfoCon">

            <div className="userNameProfessionActive">
                <span className='uiName'>Lokendra Chaulagain</span>
                <span className='uiProfession'>Software Engineer</span>
                <span className="uiActive">active 5 hour ago</span>
            </div>


            <div className="uiFollowFollowing">
                <div className="uiFollower">
                    <span className='uiFollowerTxt'>Follower</span>
                    <span className='uiFollowerNum'>86</span>
                </div>

                <div className="uiFollower">
                    <span className='uiFollowerTxt'>Following</span>
                    <span className='uiFollowerNum'>184</span>
                </div>
            </div>








            <div className="uiDetailInfo">
                <div className="uiDetailInfoItem">
                    <BusinessCenterIcon className='uiIcon' />
                    <span className='uiDetailInfoValue'>Software Engineer at Lendis</span>
                </div>

                <div className="uiDetailInfoItem">
                    <BusinessCenterIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>Co-founder at Ask Buddie</span>
                </div>

                <div className="uiDetailInfoItem">
                    <BusinessCenterIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>former WordPress Engineer at Eagle Eye </span>
                </div>

                <div className="uiDetailInfoItem">
                    <SchoolIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>Went to Oxfors Academy</span>
                </div>

                <div className="uiDetailInfoItem">
                    <LocationOnIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>From Butwal</span>
                </div>

                <div className="uiDetailInfoItem">
                    <NetworkWifi2BarIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>Followed by 995 people</span>
                </div>

                <div className="uiDetailInfoItem">
                    <BusinessCenterIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>Lokendra Chaulagain</span>
                </div>

                <div className="uiDetailInfoItem">
                    <GitHubIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>ashiishme</span>
                </div>

                <div className="uiDetailInfoItem">
                    <TwitterIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>ashiishme</span>
                </div>

                <div className="uiDetailInfoItem">
                    <LinkedInIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>ashiishme</span>
                </div>


                <div className="uiDetailInfoItem">
                    <InstagramIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>ashiishme</span>
                </div>

                <div className="uiDetailInfoItem">
                    <InsertLinkIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>www.ashishme.com.mp</span>
                </div>

                <div className="uiDetailInfoItem">
                    <MoreHorizIcon className='uiIcon' />

                    <span className='uiDetailInfoValue'>See more about Ashish</span>
                </div>
            </div>



        </div>
    )
}

export default UserInfo