import React from 'react';
import './tweets.css';

const Tweet = ({ tweet }) =>{
    return(
            <div className="tweet-wrapper event">
                <div className="content">
                <div className="summary">
                    {tweet.email}
                    <div className="date">
                    {tweet.date}
                    </div>
                </div>
                <div className="extra text">
                        {tweet.tweet}
                </div>
                </div>
            </div>
    )
}

export default Tweet;