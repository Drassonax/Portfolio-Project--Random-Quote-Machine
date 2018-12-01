import React from 'react'

export default (props) => {
    return (
        <div id="quote-box">
            <div id="quote" className={props.info.color}>
                <i className="fas fa-quote-left fa-2x"></i>
                    <span id="text">
                        {props.info.quote}
                    </span>
            </div>
            <div id="author" className={props.info.color}>
                {props.info.author}
            </div>
            <div className="buttons-area">
                <a id="tweet-quote" className={props.info.color} href={props.info.tweetLink}><i className="fab fa-twitter-square fa-3x"></i></a>
                <button id="new-quote" className={props.info.backgroundColor} onClick={props.getQuote}>New quote</button>
            </div>
        </div>
    )
}