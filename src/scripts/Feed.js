import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import {comment,comment2,comment3} from '../stats/feed.js'
import TweetBox from '../component/TweetBox'
import Post from '../component/Post'
import FlipMove from 'react-flip-move'

function Feed() {    

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        setPosts((prevPosts) => [...prevPosts, comment, comment2, comment3])
    }, [])
    
    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox posts = {posts} setPosts = {setPosts} />
            <FlipMove>
                {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}
            </FlipMove>   
        </div>
    )
}
export default Feed 