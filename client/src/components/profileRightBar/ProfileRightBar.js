import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import "./profileRightBar.scss";

function ProfileRightBar({ currentUserDetail }) {
  return (
    <>
      <h4 className="userInfo">User Information</h4>
      <div className="rightBarInfoContainer">
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {currentUserDetail?.currentJob1Position} at{" "}
            <span className="boldSpan">
              {currentUserDetail?.currentJob1Company}
            </span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {currentUserDetail?.currentJob2Position} at{" "}
            <span className="boldSpan">
              {currentUserDetail?.currentJob2Company},
            </span>
          </span>
        </div>
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Founder at{" "}
            <span className="boldSpan">{currentUserDetail?.founderOf1}</span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Co-founder at{" "}
            <span className="boldSpan">{currentUserDetail?.founderOf1}</span>
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former{" "}
            <span className="boldSpan">
              {currentUserDetail?.pastJob1Position}
            </span>{" "}
            at {currentUserDetail?.pastJob1Company}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former{" "}
            <span className="boldSpan">
              {currentUserDetail?.pastJob2Position}
            </span>{" "}
            at {currentUserDetail?.pastJob2Company}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Studies{" "}
            <span className="boldSpan">
              {currentUserDetail?.currentStudyingCourse}
            </span>{" "}
            at {""}
            {currentUserDetail?.currentStudyingUniversity}{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            +2 Completed from{" "}
            <span className="boldSpan">
              {currentUserDetail?.plus2CompletedCollege}
            </span>{" "}
            {currentUserDetail?.plus2CompletedCollegeLocation}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            SEE completed from{" "}
            <span className="boldSpan">
              {currentUserDetail?.sEECompletedCollege}
            </span>{" "}
            {currentUserDetail?.sEECompletedSchoolLocation}{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationCityIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Lives in{" "}
            <span className="boldSpan">
              {currentUserDetail?.currentlyLiving}
            </span>{" "}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationOnIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            From <span className="boldSpan">{currentUserDetail?.homeTown}</span>{" "}
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
            <span className="boldSpan">{currentUserDetail?.fullName}</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProfileRightBar;
