import React from 'react'
import "./leftBar.scss"
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';




function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="lbWrapper">

        <div className="lbListItem">
          <HomeOutlined className="lbListItemKey"/>
          <span className="lbListItemValue">Home</span>
        </div>

        <div className="lbListItem">
          <BookOutlinedIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Blogs</span>
        </div>

        <div className="lbListItem">
          <WhatshotIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Trending</span>
        </div>

        <div className="lbListItem">
          <QuestionMarkIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Ask Doubts</span>
        </div>

        <div className="lbListItem">
          <BusinessCenterOutlinedIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Find Jobs</span>
        </div>

        <div className="lbListItem">
          <AutoStoriesIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Success Story</span>
        </div>

        <div className="lbListItem">
          <HelpCenterOutlinedIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Help </span>
        </div>

        <div className="lbListItem">
          <LogoutIcon className="lbListItemKey"/>
          <span className="lbListItemValue">Logout </span>
        </div>

      </div>

    </div>
  )
}

export default LeftBar