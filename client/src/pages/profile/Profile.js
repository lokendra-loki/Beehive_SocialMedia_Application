import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./profile.scss";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";

function Profile() {
  return (
    <div className="profilePage">
      <Navbar />
      <div className="ppWrapper">
        <div className="upCoverPicCon">
          <img src="" alt="" className="upCoverPic" />
          <img src="" alt="" className="upProfilePic" />
        </div>

        <div className="ppBeforeSplit">
          <div className="ppLeft">
          
            <div className="upSmallWhatsOnYourMindCon">
           
              <img src="" alt="" className="upTinyProfilePic" />
              <input
                // onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
                type="text"
                className="upOnYourMindInput"
                placeholder="what's on your mind "
              />
            </div>
            <FeedPostCreate/>
          </div>

          <div className="ppRight">dfdf</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

// import "./userProfile.scss";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import Badge from "@mui/material/Badge";
// import UserInfo from "../../components/userInfo/UserInfo";
// import FeedPost from "../../components/feedPost/FeedPost";
// import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
// import LeftBar from "../../components/leftBar/LeftBar";
// import { AuthContext } from "../../context/authContext/AuthContext";
// import axios from "axios";

// function UserProfile() {
//   const { user } = useContext(AuthContext);
//   console.log(user)

//   //To open the FeedPostCreateContainer
//   const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false);

//   //Fetching userDetail
//   const [currentUser, setCurrentUser] = useState({});
//   useEffect(() => {
//     const userDetailsOny = async () => {
//       try {
//         const res = await axios.post("/userDetails/get", {
//           userID: user._id,
//         });
//         setCurrentUser(res.data[0]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     userDetailsOny();
//   }, [user._id]);
//   console.log(currentUser);

//   return (
//     <div className="userProfile">
//       <Navbar />
//       <div className="upWrapper">
//         <div className="upCoverPicCon">
//           <img src={currentUser.coverPic} alt="" className="upCoverPic" />
//           <img src={currentUser.profilePic} alt="" className="upProfilePic" />
//         </div>

//         <div className="upBeforeSplit">
//           <div className="upLeftCon">
//             <LeftBar />
//           </div>
//           <div className="upCenterCon">
//             <div className="upRowIconCon">
//               <div className="upRowIconItem">
//                 <Link to="/" className="link">
//                   <HomeOutlinedIcon color="action" />
//                 </Link>
//               </div>

//               <div className="upRowIconItem">
//                 <Badge badgeContent={4} color="primary">
//                   <ChatOutlinedIcon color="action" />
//                 </Badge>
//               </div>

//               <div className="upRowIconItem">
//                 <Badge badgeContent={4} color="primary">
//                   <NotificationsNoneOutlinedIcon color="action" />
//                 </Badge>
//               </div>

//               <div className="upRowIconItem">
//                 <Badge badgeContent={4} color="primary">
//                   <PeopleAltOutlinedIcon color="action" />
//                 </Badge>
//               </div>

//               <div className="upRowIconItem">
//                 <Badge badgeContent={4} color="primary">
//                   <OndemandVideoOutlinedIcon color="action" />
//                 </Badge>
//               </div>
//             </div>

//             <div className="upSmallWhatsOnYourMindCon">
//               <img
//                 src={currentUser.profilePic}
//                 alt=""
//                 className="upTinyProfilePic"
//               />
//               <input
//                 onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
//                 type="text"
//                 className="upOnYourMindInput"
//                 placeholder={
//                   "what's on your mind " +
//                   user.fullName +
//                   "?  Post photos / videos / text from here"
//                 }
//               />
//             </div>

//             {/* On Click ma yo container show hunxa */}
//             {showFeedPostCreateCon && <FeedPostCreate />}

//             {/* <FeedPost /> */}
//           </div>
//           <div className="upRightCon">
//             {/* <UserInfo /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
