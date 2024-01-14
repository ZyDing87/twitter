import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import FlipMove from 'react-flip-move'

function Feed() {    

    const [posts, setPosts] = useState([]);

    let comment = {key : 'Hello',
    displayName : 'Allsee Technologies',
    username : 'Allsee Tech',
    verified :  true,
    text :'Hello',
    avatar : "https://pbs.twimg.com/profile_images/1720020150613651456/KMq5JBTI_400x400.jpg", }

    let comment2 = {key : 'cool',
    displayName : 'Allsee Technologies',
    username : 'Allsee Tech',
    verified :  true,
    text :'Take a look at Spar in @Brindleyplace, showcasing their delicious smoothie menu on our Digital Menu Boards! 🤤',
    image : "https://pbs.twimg.com/media/GDUl84yXcAAeb6j?format=jpg&name=900x900",
    avatar : "https://pbs.twimg.com/profile_images/1720020150613651456/KMq5JBTI_400x400.jpg", }
    
    let comment3 = {key : 'great',
    displayName : 'Allsee Technologies',
    username : 'Allsee Tech',
    verified :  true,
    text :'Are you subscribed to our mailing list?👀 Our #emails include crucial information about our solutions and the #digitalsignage industry, making this a truly valuable tool to help your business grow!',
    image : "https://pbs.twimg.com/media/GC7IJW_WkAAYu8f?format=jpg&name=large",
    avatar : "https://pbs.twimg.com/profile_images/1720020150613651456/KMq5JBTI_400x400.jpg", }
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