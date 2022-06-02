import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./home.scss";
import FeedPost from "../../components/feedPost/FeedPost";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";

function Home() {
  const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false);

  return (
    <div className="homePage">
      <div className="hpWrapper">
        <Navbar />
        <div className="hpBeforeSplit">
          <div className="hpLeftCon">
            <LeftBar />
          </div>

          <div className="hpCenterCon">
            {showFeedPostCreateCon && (
              <FeedPostCreate
                setShowFeedPostCreateCon={setShowFeedPostCreateCon}
              />
            )}
            <div
              className="feedPostCreateCon"
              onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
            >
              What's on your mind Lokendra ?
            </div>
            <FeedPost />
          </div>

          <div className="hpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
