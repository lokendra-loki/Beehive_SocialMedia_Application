import React, { useContext, useEffect, useState } from "react";
import "./feedPage.scss";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Badge from "@mui/material/Badge";
import FeedPost from "../../components/feedPost/FeedPost";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import RecentPost from "../../components/recentPost/RecentPost";
import Category from "../../components/category/Category";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function FeedPage() {
  const { user } = useContext(AuthContext);
  //To open the FeedPostCreateContainer
  const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false);

  //Fetching userDetail
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const userDetailsOny = async () => {
      try {
        const res = await axios.post("/userDetails/get", {
          userID: user._id,
        });
        setCurrentUser(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    userDetailsOny();
  }, [user._id]);

  //Fetching all feed posts
  const [feedPosts, setFeedPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get("/userPosts/getAll");
      setFeedPosts(res.data);
    };
    fetchAllPosts();
  }, []);
  console.log(feedPosts);

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
              <img
                src={currentUser.profilePic}
                alt=""
                className="tinyProfilePic"
              />
              <input
                onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
                type="text"
                className="onYourMindInput"
                placeholder="What's on your mind Lokendra ?  Post photos / videos / text from here"
              />
            </div>
            {/* On Click ma yo container show hunxa */}
            {showFeedPostCreateCon && <FeedPostCreate />}

            {/* {feedPosts.content?.map((item, i) => (
              <FeedPost index={i} item={item} key={i} />
            ))}  */}

            {feedPosts.map((feedPost, key) => (
              <FeedPost feedPost={feedPost} key={key} />
            ))}
          </div>
          <div className="fpRightCon">
            <Category />
            <RecentPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
