import React, { Component } from "react";
import firebase from "firebase";
// import React, { Component } from 'react'

export class addQuiz extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("quiz");

    this.state = {
      questionName: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      courseId:this.props.match.params.courseId,
      quiz: []
    };
  }
  componentDidMount() {
    let arr = [];
    this.ref
      .where("courseID", "==", 1)
      .get()
      .then(snap => {
        snap.forEach(ele => {
          arr.push({
            questionName: ele.data().questionName,
            op1: ele.data().options[0],
            op2: ele.data().options[1],
            op3: ele.data().options[2],
            op4: ele.data().options[3],
            answer: ele.data().answer
          });
        });
        this.setState({ quiz: arr });
      });
  }

  radioHandleClick = e => {
    document.querySelectorAll(".textArea").forEach(ele => {
      ele.style.display = "none";
    });
    document.querySelectorAll(".quizOptions").forEach(ele => {
      ele.style.display = "block";
      ele.textContent = ele.nextSibling.value;
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  textAreaNone = e => {
    document.querySelectorAll(".textArea").forEach(ele => {
      if (e.target !== ele) {
        if (ele.value !== "") {
          ele.style.display = "none";
          ele.previousSibling.style.display = "block";
          ele.previousSibling.textContent = ele.value;
        }
      }
    });
    document.querySelectorAll(".quizOptions").forEach(ele => {
      ele.addEventListener("click", e => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
      });
      // if(e.target !== ele){
      //   if(ele.value !== ''){
      //     ele.style.display = 'none';
      //     ele.previousSibling.textContent = ele.value;
      //   }
      // }
    });
  };

  SubmitQuiz = e => {
    let ans;
    let options = [];
    e.preventDefault();
    document.querySelectorAll(".options").forEach(ele => {
      if (ele.checked) {
        ans = ele.parentElement.nextSibling.firstChild.nextSibling.value;
      }
      options.push(ele.parentElement.nextSibling.firstChild.nextSibling.value);
    });
    let qusName = document.querySelector(".questionName").value;
    this.ref.add({
      courseID: this.state.courseId,
      questionName: qusName,
      options: options,
      answer: ans
    });
    let arrNew = [];
    this.ref
      .where("courseID", "==", this.state.courseId)
      .get()
      .then(snap => {
        snap.forEach(ele => {
          arrNew.push({
            questionName: ele.data().questionName,
            op1: ele.data().options[0],
            op2: ele.data().options[1],
            op3: ele.data().options[2],
            op4: ele.data().options[3],
            answer: ele.data().answer
          });
        });
        this.setState({
          quiz: arrNew,
          questionName: "",
          op1: "",
          op2: "",
          op3: "",
          op4: ""
        });
        document.querySelectorAll(".quizOptions").forEach(ele => {
          ele.textContent = "";
          ele.style.display = "none";
          ele.nextSibling.style.display = "block";
          ele.nextSibling.value = "";
        });
        document.querySelectorAll(".options").forEach(ele => {
          ele.checked = false;
        });
      });
  };
  onContinue = () => {
    window.location = `/welcome`;
  };
  render() {
    return (
      <div className="quiz">
        <div className="course1" style={{ margin: "0 20vw", color: "#a1a2a3" }}>
          <h4
            style={{ textAlign: "center", color: "#a1a2a3", fontWeight: "700" }}
          >
            Create new quiz
          </h4>
          <hr />
          <div className="">
            <form onSubmit={this.SubmitQuiz}>
              <div className="container1 p-5">
                <div>
                  <div className="row1">
                    <label className="col-md-3 lH">Enter Question</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        name="questionName"
                        className=" questionName"
                        placeholder="Enter question"
                        onChange={this.handleChange}
                        value={this.state.questionName}
                      />
                    </div>
                  </div>
                  <div className="row1">
                    <div className="col-md-1">
                      <input
                        type="radio"
                        name="selectAnswer"
                        onClick={this.radioHandleClick}
                        className="options "
                      />
                    </div>
                    <div className="col-md-11">
                      <span className="quizOptions"></span>
                      <textarea
                        name="op1"
                        className="textArea "
                        style={{ resize: "none" }}
                        onClick={this.textAreaNone}
                        onChange={this.handleChange}
                        placeholder="Option 1"
                      >
                        {this.state.op1}
                      </textarea>
                    </div>
                  </div>
                  
                  <div className="row1">
                    <div className="col-md-1">
                      <input
                        type="radio"
                        name="selectAnswer"
                        onClick={this.radioHandleClick}
                        className="options "
                      />
                    </div>
                    <div className="col-md-11">
                      <span className="quizOptions"></span>
                      <textarea
                        name="op2"
                        className=" textArea"
                        style={{ resize: "none" }}
                        onClick={this.textAreaNone}
                        onChange={this.handleChange}
                        placeholder="Option 2"
                      >
                        {this.state.op2}
                      </textarea>{" "}
                    </div>
                  </div>
                  <div className="row1">
                    <div className="col-md-1">
                      <input
                        type="radio"
                        name="selectAnswer"
                        onClick={this.radioHandleClick}
                        className="options "
                      />
                    </div>
                    <div className="col-md-11">
                      <span className="quizOptions"></span>
                      <textarea
                        name="op3"
                        className=" textArea"
                        style={{ resize: "none" }}
                        onClick={this.textAreaNone}
                        onChange={this.handleChange}
                        placeholder="Option 3"
                      >
                        {this.state.op3}
                      </textarea>{" "}
                    </div>
                  </div>
                  <div className="row1">
                    <div className="col-md-1">
                      <input
                        type="radio"
                        name="selectAnswer"
                        onClick={this.radioHandleClick}
                        className="options "
                      />
                    </div>
                    <div className=" col-md-11">
                      <span className="quizOptions"></span>
                      <textarea
                        name="op4"
                        className=" textArea"
                        style={{ resize: "none" }}
                        onClick={this.textAreaNone}
                        onChange={this.handleChange}
                        placeholder="Option 4"
                      >
                        {this.state.op4}
                      </textarea>{" "}
                    </div>
                  </div>
                  <center><button type="submit" className="btn btn-danger quizbutton">
                    Submit
                  </button>
                  {"       "}
                  <button type="submit" className="btn btn-danger quizbutton ml-5" onClick={this.onContinue}>
                    Continue
                  </button>
                  </center><hr />
                </div>

                <div className="appendQuiz">
                  <center><h4 className='p-3'>Your Response</h4></center><hr />
                  {console.log(this.state.quiz)}
                  {this.state.quiz.map(ele => (
                    <div>
                      <p>Question name: {ele.questionName}</p>
                      <p>Option 1: {ele.op1}</p>
                      <p>Option 2: {ele.op2}</p>
                      <p>Option 3: {ele.op3}</p>
                      <p>Option 4: {ele.op4}</p>
                      <p>Answer: {ele.answer}</p>
                      <hr /></div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default addQuiz;
