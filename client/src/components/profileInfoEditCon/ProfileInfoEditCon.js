import React from "react";
import { useAPI } from "../../context/userDetailContext";
import "./profileInfoEditCon.scss";

function ProfileInfoEditCon() {
  const { currentUserDetail } = useAPI();
  console.log(currentUserDetail);

  return (
    <div className="profileInfoEditCon">
      <div className="piecItem">
        <span className="piecTitle">Currently Working</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob1Position}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Currently working At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob1Company}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Currently working</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob2Position}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Currently working At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob2Company}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Founder At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.founderOf1}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Co-founder At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.founderOf2}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Past Job Role</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob1Position}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Past Job Role At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob1Company}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Past Job Role</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob2Position}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Past Job Role At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob2Company}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Currently Studying Course Name</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentStudyingCourse}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Currently Studying College/University</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentStudyingUniversity}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">+2 Completed College </span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.plus2CompletedCollege}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">+2 Completed College Location </span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.plus2CompletedCollegeLocation}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">SEE Completed School</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.sEECompletedCollege}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">SEE Completed School Location</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.sEECompletedSchoolLocation}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Lives In</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentlyLiving}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">From</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.homeTown}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">Email Address</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.email}
        />
      </div>

      <div className="piecItem">
        <span className="piecTitle">RelationShipStatus</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.relationShipStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfoEditCon;
