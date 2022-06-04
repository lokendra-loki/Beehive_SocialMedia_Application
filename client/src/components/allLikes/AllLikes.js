import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import "./allLikes.scss";
import axios from "axios";

function AllLikes({ setOpenLikesCon, peopleKoId }) {
  console.log(peopleKoId);

  //Fetching user info from id
  const [userInfo, setUserInfo] = React.useState([{}]);
  React.useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await axios.get(`/users/get/${peopleKoId}`);
      setUserInfo(res.data);
    };
    fetchUserInfo([{}]);
  }, [peopleKoId]);
  console.log(userInfo);
  // console.log(userInfo[0]);
  // console.log(userInfo[1]);

  return (
    <div className="allLikesContainer">
      <h3 className="alcallComments">
        Who Liked Your Post
        <ClearIcon
          className="alcallCommentClearIcon"
          onClick={() => setOpenLikesCon(false)}
        />
      </h3>

      <Link to={`/profile/${userInfo._id}`} className="link">
        <span className="alccomment1">
          <img src={userInfo?.profilePic} alt="" className="alccommentImg" />
          {userInfo.username}
        </span>
      </Link>

      {/* <hr className="acHr" /> */}
    </div>
  );
}

export default AllLikes;
