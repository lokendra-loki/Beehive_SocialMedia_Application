import React from 'react'
import "./userInfoEdit.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';


function UserInfoEdit() {
    return (
        <div className='userInfoEdit'>
            <div className="uieRow1">
                <div className="uieRow1_1">
                    <ArrowBackIcon classes="uieArrowBackIcon" />
                    <span className="uieArrowBackTxt">Edit profile</span>
                </div>
                <button className="uieRow1Btn">Save</button>
            </div>
            <hr className="uieHr1" />
            <div className="uieRow2">
                <span className="uieSpan1">Profile picture</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <img src="" alt="" className="uieProfilePic" />
            <hr className="uieHr2" />
            <div className="uieRow3">
                <span className="uieSpan1">cover picture</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <img src="" alt="" className="uieCoverPic" />
            <hr className="uieHr3" />
            <div className="uieRow4">
                <span className="uieSpan1">Bio</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <input type="text" className="bioInput" />


            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>
            
            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>


            <div className="userInfoItemEditCon">
                <SchoolOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <ApartmentOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <PermIdentityOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <CakeOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <BadgeOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <LoyaltyOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <LocationOnOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <EmailOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <div className="userInfoItemEditCon">
                <LocalPhoneOutlinedIcon className="userInfoItemEditIcon" />
                <input type="text" className="userInfoItemEditInput" />
            </div>

            <button className="uieSaveBtn">Save</button>




        </div>
    )
}

export default UserInfoEdit