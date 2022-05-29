import React from "react";
import Category from "../category/Category";
import RecentPost from "../recentPost/RecentPost";
import "./rightBar.scss";

function RightBar() {
  return (
    <div className="rightBarComponent">
      <Category />
      <RecentPost />
      <span className="helper"></span>
    </div>
  );
}

export default RightBar;
