import React from 'react'

export default function Result(props) {
    return (
        <div className="score-board">
            <div className="score"> You scored {props.score}/{props.response}</div>
            <button className="playBtn" onClick={props.playAgain}>Take quiz again</button>
        </div>
    )
}
