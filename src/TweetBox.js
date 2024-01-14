import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'

function TweetBox({posts,setPosts}) {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        const newPost = {
            displayName: "Allsee Technologies",
            username: "AllseeTech",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1720020150613651456/KMq5JBTI_400x400.jpg",
          };

        setPosts([...posts, newPost])
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://pbs.twimg.com/profile_images/1720020150613651456/KMq5JBTI_400x400.jpg"
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
                <Button 
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
