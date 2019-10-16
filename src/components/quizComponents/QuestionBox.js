import React, {useState} from 'react'

export default function QuestionBox(props,{selected}) {
    const [answer,setAnswer] = useState(props.option);

    return (
        <div className="questionBox">
            <div className="question">
                {props.question}
                </div>
                {answer.map((text,index)=>(
                    <button key={index} className="answerBtn" onClick={() => {
                        setAnswer([text]); 
                        props.selected(text);
                    }}>{text}</button>
                ))}           
        </div>
    )
}
