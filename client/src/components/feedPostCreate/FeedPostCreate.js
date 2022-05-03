import React from 'react'
import "./feedPostCreate.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import LinkIcon from '@mui/icons-material/Link';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

function FeedPostCreate() {
  return (
    <div className='feedPostCreate'>

      <div className="fpcRow1">
        <div className="fpcRow1IconAndBackTxt">
          <ArrowBackIcon className="fpcRow1Icon" />
          <span className="fpcBack">Back</span>
        </div>
        <button className="fpcPost">Post</button>
      </div>

      <hr className="fpcHr" />

      <div className="fpcRow2">
        <img src="/assets/profile.jpeg" alt="" className="fpcProfilePic" />
        <span className="fpcUsername">Loki Chaulagain</span>
      </div>


      <div className="fpcwhatsOnMindAndSelectedItemCon">
        <input type="text" className="fpcwhatsOnMind" placeholder="What's on your mind ?" />
        <div className="fpcSelectedItemList">
          <div className="fpcSelectedItemCon">1</div>
          <div className="fpcSelectedItemCon">1</div>
          <div className="fpcSelectedItemCon">1</div>
        </div>
      </div>





      <label className='fpcImgVideoInput' htmlFor="fileInput1">
        <PhotoSizeSelectActualOutlinedIcon className="fpcImgIcon" />
        <span className='fpcSelectImgTxt'>Image</span>
      </label>
      <input type="file" id='fileInput1' style={{ display: " none" }} />



      <label className='fpcImgVideoInput' htmlFor="fileInput2">
        <VideoCameraBackOutlinedIcon className="fpcImgIcon" />
        <span className='fpcSelectImgTxt'>Video</span>
      </label>
      <input type="file" id='fileInput2' style={{ display: " none" }} />

      <label className='fpcImgVideoInput' htmlFor="fileInput3">
        <LinkIcon className="fpcImgIcon" />
        <span className='fpcSelectImgTxt'>Video</span>
      </label>
      <input type="url" id='fileInput3' style={{ display: " none" }} />


      <label className='fpcImgVideoInput' htmlFor="fileInput4">
        <PollOutlinedIcon className="fpcImgIcon" />
        <span className='fpcSelectImgTxt'>Poll</span>
      </label>
      <input type="url" id='fileInput4' style={{ display: " none" }} />

      <button className="fpcPostBut">Post</button>

    </div>
  )
}

export default FeedPostCreate