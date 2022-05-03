import React from 'react'
import "./feedPost.scss"
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';




function FeedPost() {
    return (
        <div className='feedPost'>
            <div className="fpRow1">
                <img src="/assets/cover.jpeg" alt="" className="fpProfilePic" />
                <div className="fpProfileInfoColumn">
                    <span className="fpUsername">Loki Chaulagain</span>
                    <span className="fpProfession">Software Engineer</span>
                    <span className="fpTime">6 hour ago</span>
                </div>
                <div className="fpMoreIconColumn">
                    <MoreVertOutlinedIcon />
                </div>
            </div>
            <span className="fpDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, molestias itaque asperiores corrupti animi facilis.
            </span>
            <img src="/assets/cover.jpeg" alt="" className="fpPostImg" />
            <hr className="fpHr" />
            <div className="fpIconsRow">

                <div className="fpLikeDislikeIconWrapper">


                    <div className="fpIconsItemColumn">
                        <ThumbUpOutlined className="fpIconsItemIcon" />
                        <span className="fpIconsItemTxt"> 45Likes</span>
                    </div>

                    <div className="fpIconsItemColumn ">
                        <ThumbDownAltOutlinedIcon className="fpIconsItemIcon" />
                        <span className="fpIconsItemTxt"> 19 dislikes</span>
                    </div>
                </div>

                <div className="fpIconsItemColumn">
                    <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
                    <span className="fpIconsItemTxt"> 7 comments</span>
                </div>

                <div className="fpIconsItemColumn">
                    <ShareOutlinedIcon className="fpIconsItemIcon" />
                    <span className="fpIconsItemTxt"> 4 share</span>
                </div>

            </div>
        </div>
    )
}

export default FeedPost