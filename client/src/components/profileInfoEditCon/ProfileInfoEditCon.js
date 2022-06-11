import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useAPI } from "../../context/userDetailContext";
import "./profileInfoEditCon.scss";

function ProfileInfoEditCon() {
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();
  console.log(currentUserDetail);

  //Update
  // const [nickName, setNickName] = useState(currentUserDetail.nickName);
  // const [bio, setBio] = useState(currentUserDetail.bio);/
  // const [profession, setProfession] = useState(currentUserDetail.profession);
  const [homeTown, setHomeTown] = useState(currentUserDetail.homeTown);
  const [currentlyLiving, setCurrentlyLiving] = useState(
    currentUserDetail.currentlyLiving
  );
  // const [profilePicP, setProfilePicP] = useState(currentUserDetail.profilePicP);
  // const [coverPic, setCoverPic] = useState(currentUserDetail.coverPic);
  const [currentJob1Position, setCurrentJob1Position] = useState(
    currentUserDetail.currentJob1Position
  );
  const [currentJob1Company, setCurrentJob1Company] = useState(
    currentUserDetail.currentJob1Company
  );

  const [currentJob2Position, setCurrentJob2Position] = useState(
    currentUserDetail.currentJob2Position
  );
  const [currentJob2Company, setCurrentJob2Company] = useState(
    currentUserDetail.currentJob2Company
  );

  const [founderOf1, setFounderOf1] = useState(currentUserDetail.founderOf1);
  const [founderOf2, setFounderOf2] = useState(currentUserDetail.founderOf2);
  const [currentStudyingCourse, setCurrentStudyingCourse] = useState(
    currentUserDetail.currentStudyingCourse
  );
  const [currentStudyingUniversity, setCurrentStudyingUniversity] = useState(
    currentUserDetail.currentStudyingUniversity
  );
  // const [graduatedCourse, setGraduatedCourse] = useState(
  //   currentUserDetail.graduatedCourse
  // );
  // const [graduatedUniversity, setGraduatedUniversity] = useState(
  //   currentUserDetail.graduatedUniversity
  // );
  const [plus2CompletedCollege, setPlus2CompletedCollege] = useState(
    currentUserDetail.plus2CompletedCollege
  );
  const [plus2CompletedCollegeLocation, setPlus2CompletedCollegeLocation] =
    useState(currentUserDetail.plus2CompletedCollegeLocation);

  const [sEECompletedCollege, setSEECompletedCollege] = useState(
    currentUserDetail.sEECompletedCollege
  );
  const [sEECompletedSchoolLocation, setSEECompletedSchoolLocation] = useState(
    currentUserDetail.sEECompletedSchoolLocation
  );
  const [pastJob1Position, setPastJob1Position] = useState(
    currentUserDetail.pastJob1Position
  );
  const [pastJob1Company, setPastJob1Company] = useState(
    currentUserDetail.pastJob1Company
  );
  const [pastJob2Position, setPastJob2Position] = useState(
    currentUserDetail.pastJob2Position
  );
  const [pastJob2Company, setPastJob2Company] = useState(
    currentUserDetail.pastJob2Company
  );
  const [relationShipStatus, setRelationShipStatus] = useState(
    currentUserDetail.relationShipStatus
  );

  const [bio, setBio] = useState(currentUserDetail.bio);
  const [profession, setProfession] = useState(currentUserDetail.profession);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `/userDetails/update/${currentUserDetail._id}`,
        {
          userID: user._id,
          fullName: user.fullName,
          nickName: user.nickName,
          homeTown,
          currentlyLiving,
          currentJob1Position,
          currentJob1Company,
          currentJob2Position,
          currentJob2Company,
          founderOf1,
          founderOf2,
          currentStudyingCourse,
          currentStudyingUniversity,
          plus2CompletedCollege,
          plus2CompletedCollegeLocation,
          sEECompletedCollege,
          sEECompletedSchoolLocation,
          pastJob1Position,
          pastJob1Company,
          pastJob2Position,
          pastJob2Company,
          relationShipStatus,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="profileInfoEditCon" onSubmit={handleSubmit}>
      <div className="piecItem">
        <span className="piecTitle">Currently Working</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob1Position}
          onChange={(e) => setCurrentJob1Position(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Currently working At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob1Company}
          onChange={(e) => setCurrentJob1Company(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Currently working</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob2Position}
          onChange={(e) => setCurrentJob2Position(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Currently working At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentJob2Company}
          onChange={(e) => setCurrentJob2Company(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Founder At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.founderOf1}
          onChange={(e) => setFounderOf1(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Co-founder At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.founderOf2}
          onChange={(e) => setFounderOf2(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Past Job Role</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob1Position}
          onChange={(e) => setPastJob1Position(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Past Job Role At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob1Company}
          onChange={(e) => setPastJob1Company(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Past Job Role</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob2Position}
          onChange={(e) => setPastJob2Position(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Past Job Role At</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.pastJob2Company}
          onChange={(e) => setPastJob2Company(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Currently Studying Course Name</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentStudyingCourse}
          onChange={(e) => setCurrentStudyingCourse(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Currently Studying College/University</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentStudyingUniversity}
          onChange={(e) => setCurrentStudyingUniversity(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">+2 Completed College </span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.plus2CompletedCollege}
          onChange={(e) => setPlus2CompletedCollege(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">+2 Completed College Location </span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.plus2CompletedCollegeLocation}
          onChange={(e) => setPlus2CompletedCollegeLocation(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">SEE Completed School</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.sEECompletedCollege}
          onChange={(e) => setSEECompletedCollege(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">SEE Completed School Location</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.sEECompletedSchoolLocation}
          onChange={(e) => setSEECompletedSchoolLocation(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">Lives In</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.currentlyLiving}
          onChange={(e) => setCurrentlyLiving(e.target.value)}
        />
      </div>
      <div className="piecItem">
        <span className="piecTitle">From</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.homeTown}
          onChange={(e) => setHomeTown(e.target.value)}
        />
      </div>
      {/* <div className="piecItem">
        <span className="piecTitle">Email Address</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.email}
        />
      </div> */}
      <div className="piecItem">
        <span className="piecTitle">RelationShipStatus</span>
        <input
          type="text"
          className="piecInput"
          defaultValue={currentUserDetail.relationShipStatus}
          onChange={(e) => setRelationShipStatus(e.target.value)}
        />
      </div>{" "}
      <button className="pieSave" type="submit">
        Save
      </button>
    </form>
  );
}

export default ProfileInfoEditCon;
