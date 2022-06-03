import React, { useEffect } from "react";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import Navbar from "../../components/navbar/Navbar";
import FeedPost from "../../components/feedPost/FeedPost";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profile.scss";

function Profile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //userDetail from path id
  const [userDetail, setUserDetail] = React.useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await axios.post("/userDetails/getByUserID", {
        userID: path,
      });
      setUserDetail(res.data[0]);
    };
    fetchUserDetail();
  }, [path]);

  //all posts of a user from path id
  const [userKoPosts, setUserKoPosts] = React.useState([{}]);
  useEffect(() => {
    const fetchUserKoPosts = async () => {
      try {
        const res = await axios.post("/userPosts/getAllPostsOfAUser", {
          userID: path,
        });
        setUserKoPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserKoPosts();
  }, [path]);

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
                placeholder={
                  "what's on your mind " + userDetail.fullName + " ?"
                }
              />
            </div>

            <div className="feedPostCreateConWrapper">
              {showFeedCreateCon && (
                <FeedPostCreate setShowFeedCreateCon={setShowFeedCreateCon} />
              )}
            </div>

            {userKoPosts.map((privatePost, i) => (
              <FeedPost index={i} key={i} privatePost={privatePost} />
            ))}
          </div>

          <div className="ppRight">
            <ProfileRightBar userDetail={userDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
