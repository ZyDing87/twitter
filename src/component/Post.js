import { Avatar } from '@mui/material'
import PublishIcon  from '@mui/icons-material/Publish'
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline'
import VerifiedUserIcon  from '@mui/icons-material/VerifiedUser'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, {forwardRef, useState}  from 'react'
import '../css/Post.css'

/* 

const Post = forwardRef(
    ({
        displayName,
        username,
        verified, 
        text, 
        image, 
        avatar
}, ref)  => {
    return (
        <div className = "post" ref={ref}>
            <div className = "post__avatar">
                <Avatar 
                    src = {avatar}
                />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        {displayName}
                            <span className = "post__headerSpecial">
                                {verified && <VerifiedUserIcon className = "post__badge" />}
                                @{username}
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img 
                    src = {image}
                    alt = ""
                />
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" /> 
                    <RepeatIcon fontSize = "small" />
                    <FavoriteBorderIcon fontSize = "small" />
                    <PublishIcon  fontSize = "small" /> 
                </div>
            </div>    
        </div>
    )
})
export default Post */

const Post = forwardRef(({
    displayName,
    username,
    verified, 
    text, 
    image, 
    avatar
}, ref)  => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    {isFavorited ? (
                        <FavoriteIcon
                        fontSize="small"
                        onClick={toggleFavorite}
                        style={{ color: 'red' }}
                        />
                    ) : (
                        <FavoriteBorderIcon
                        fontSize="small"
                        onClick={toggleFavorite}
                        style={{ color: 'black' }}
                        />
                    )}
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});
                            
export default Post;