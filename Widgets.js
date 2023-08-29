import React from 'react'
import "./Widgets.css";
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
}from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
      </div>

    <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1696090592684789846"}/>

        <TwitterTimelineEmbed
         sourceType="profile"
         screenName="urstrulymahesh"
         options={{ height: 400 }}
       />
         <TwitterShareButton
          url={"https://pbs.twimg.com/media/FyLPxg_WYAUMy8Q?format=jpg&name=4096x4096"}
          options={{ text: "BTS..", via: "URSTRULYMAHESH" }}
        />

    </div>

    </div>
  )
}

export default Widgets
