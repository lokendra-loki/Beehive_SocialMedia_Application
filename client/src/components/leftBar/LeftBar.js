import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import "./leftBar.scss";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="lbWrapper">
        <Link to="/" className="link">
          <div className="lbListItem">
            <HomeOutlined className="lbListItemKey" />
            <span className="lbListItemValue">Home</span>
          </div>
        </Link>

        <Link to="/profile" className="link">
          <div className="lbListItem">
            <PersonOutlineOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Profile</span>
          </div>
        </Link>

        <Link to="/blogs" className="link">
          <div className="lbListItem">
            <BookOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Blogs</span>
          </div>
        </Link>

        <Link to="/blogCreate" className="link">
          <div className="lbListItem">
            <BorderColorOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Write Blogs</span>
          </div>
        </Link>

        <div className="lbListItem">
          <WhatshotIcon className="lbListItemKey" />
          <span className="lbListItemValue">Trending</span>
        </div>

        <div className="lbListItem">
          <QuestionMarkIcon className="lbListItemKey" />
          <span className="lbListItemValue">Ask Doubts</span>
        </div>

        <Link to="/bookmark" className="link">
          <div className="lbListItem">
            <BookmarkIcon className="lbListItemKey" />
            <span className="lbListItemValue">Bookmarked</span>
          </div>
        </Link>

        <Link to="/jobSearch" className="link">
          <div className="lbListItem">
            <BusinessCenterOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Find Jobs</span>
          </div>
        </Link>

        <Link to="/jobCreate" className="link">
          <div className="lbListItem">
            <EngineeringOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Create Jobs</span>
          </div>
        </Link>

        <div className="lbListItem">
          <AutoStoriesIcon className="lbListItemKey" />
          <span className="lbListItemValue">Success Story</span>
        </div>

        <div className="lbListItem">
          <HelpCenterOutlinedIcon className="lbListItemKey" />
          <span className="lbListItemValue">Help </span>
        </div>

        <div className="lbListItem">
          <LogoutIcon className="lbListItemKey" />
          <span className="lbListItemValue">Logout </span>
        </div>

        <div className="lbListItem">
          <LogoutIcon className="lbListItemKey" />
          <span className="lbListItemValue">Logout </span>
        </div>

        <div className="lbListItem">
          <LogoutIcon className="lbListItemKey" />
          <span className="lbListItemValue">Logout </span>
        </div>

        <div className="lbListItem">
          <LogoutIcon className="lbListItemKey" />
          <span className="lbListItemValue">Logout </span>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
