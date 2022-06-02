import React from "react";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import Navbar from "../../components/navbar/Navbar";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import { useAPI } from "../../context/userDetailContext";
import "./profile.scss";

function Profile() {
  const { currentUserDetail } = useAPI();
  console.log(currentUserDetail);

  
  const [showFeedCreateCon, setShowFeedCreateCon] = React.useState(false);
  return (
    <div className="profilePage">
      <Navbar />
      <div className="ppWrapper">
        <div className="upCoverPicCon">
          <img src="/assets/profile.jpeg" alt="" className="upCoverPic" />
          <img src="/assets/profile.jpeg" alt="" className="upProfilePic" />
        </div>

        <div className="ppBeforeSplit">
          <div className="ppLeft">
            <div
              className="upSmallWhatsOnYourMindCon"
              onClick={() => setShowFeedCreateCon(!showFeedCreateCon)}
            >
              <img src="" alt="" className="upTinyProfilePic" />
              <input
                type="text"
                className="upOnYourMindInput"
                placeholder="what's on your mind "
              />
            </div>

            <div className="feedPostCreateConWrapper">
              {showFeedCreateCon && (
                <FeedPostCreate
                  setShowFeedCreateCon={setShowFeedCreateCon}
              
                />
              )}
            </div>
          </div>

          <div className="ppRight">
            <ProfileRightBar currentUserDetail={currentUserDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
