import React from 'react'
import '../css/Widgets.css'
import {tweetIdNumber,userName} from '../stats/widgets.js'
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetSecondContainer">
                <h2>
                    Subscribe to Premium
                </h2>
                <h3>
                    Subscribe to unliock new features and if eligible, receive a share of ads revenue.
                </h3>
                <Button variant = "outlined" className = "widgets__tweet">Subscribe</Button>
                </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
                <TwitterTweetEmbed tweetId = {tweetIdNumber} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = {userName}
                    options = {{ height: 400 }}
                />
                
            </div>
        </div>
    )
}

export default Widgets
