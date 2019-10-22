import React, { Component } from 'react'
import firebase from 'firebase'
import QuestionBox from './QuestionBox'
import Result from './Result'

export class showingQuiz extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection("quiz");
        this.state = {
         data:[],
         score:0,
         courseId:this.props.match.params.courseId,
         responses:0
        };
      }
      computeAnswer = (answer,correctAnswer) => {
        if(answer === correctAnswer){
          this.setState({
            score:this.state.score + 1
          });
        }
        this.setState({
          responses:this.state.responses + 1
        })
      }
      playAgain = () => {
        this.setState({
          score:0,
          responses:0
        })
      }
      componentDidMount(){
          this.fetchQuiz();
      }
      fetchQuiz = () => {
          let arr = [];
          firebase.firestore().collection("quiz")
          .where("courseID","==",this.state.courseId)
          .get()
          .then(snapshot => {
              snapshot.forEach(ele => {
                  console.log(ele.data());
                  arr.push(ele.data());
              })
              if(snapshot.empty){
                  console.log("no matching documents")
                  return;
              }
            //   console.log(snapshot.data());
            this.setState({data: arr});
          })

      }
    render() {
        console.log(this.state.data.length)
        return (
            <div className="quizcontainer">
                <div className="title">Quiz</div>
                {this.state.responses < this.state.data.length && 
                this.state.data.map((question)=> (
                    <QuestionBox question={question.questionName} option={question.options} selected={answer => this.computeAnswer(answer,question.answer)}/>
                ))}
                {this.state.responses === this.state.data.length && this.state.data.length  > 0 ? (<Result responses={this.state.data.length} score={this.state.score} playAgain={this.playAgain}/>) : null}
            </div>
        )
    }
}

export default showingQuiz

