import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";

function ProfileRightBar({ userDetail }) {
  return (
    <>
      <h4 className="userInfo">User Information</h4>
      <div className="rightBarInfoContainer">
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {userDetail?.currentJob1Position} at{" "}
            <span className="boldSpan">{userDetail?.currentJob1Company}</span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {userDetail?.currentJob2Position} at{" "}
            <span className="boldSpan">{userDetail?.currentJob2Company},</span>
          </span>
        </div>
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Founder at{" "}
            <span className="boldSpan">{userDetail?.founderOf1}</span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Co-founder at{" "}
            <span className="boldSpan">{userDetail?.founderOf1}</span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former{" "}
            <span className="boldSpan">{userDetail?.pastJob1Position}</span> at{" "}
            {userDetail?.pastJob1Company}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former{" "}
            <span className="boldSpan">{userDetail?.pastJob2Position}</span> at{" "}
            {userDetail?.pastJob2Company}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Studies{" "}
            <span className="boldSpan">
              {userDetail?.currentStudyingCourse}
            </span>{" "}
            at {""}
            {userDetail?.currentStudyingUniversity}{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            +2 Completed from{" "}
            <span className="boldSpan">
              {userDetail?.plus2CompletedCollege}
            </span>{" "}
            {userDetail?.plus2CompletedCollegeLocation}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            SEE completed from{" "}
            <span className="boldSpan">{userDetail?.sEECompletedCollege}</span>{" "}
            {userDetail?.sEECompletedSchoolLocation}{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationCityIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Lives in{" "}
            <span className="boldSpan">{userDetail?.currentlyLiving}</span>{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationOnIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            From <span className="boldSpan">{userDetail?.homeTown}</span>{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <EmailIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">lokendra@gmail.com</span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationOnIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Relationship: <span className="boldSpan">single</span>{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <MoreHorizIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            See more about{" "}
            <span className="boldSpan">{userDetail?.fullName}</span>
          </span>
        </div>
        
        <Link to={"/profileEdit"}>
          <button className="profileInfoEditBut">Edit</button>
        </Link>
      </div>
    </>
  );
}

export default ProfileRightBar;
