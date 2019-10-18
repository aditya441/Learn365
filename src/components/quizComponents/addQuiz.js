import React, { Component } from 'react'
import firebase from 'firebase';

export class addQuiz extends Component {
  constructor(props){
    super(props);
    this.ref =  firebase.firestore().collection('quiz');
    
    this.state = {
        quizTitle:'',
        questionName:'',
        optionname: "",
        optionArray: [],
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        courseId:this.props.match.params.courseId,
        correctAnswer:''
    };
}

onQuestionChange = e => {
  this.setState({questionName:e.target.value})
};
onCorrectAnswer = e => {
  this.setState({correctAnswer:e.target.value})
};

onTitleChange = e => {
  const state = this.state;
  state[e.target.name] = e.target.value;
  this.setState(state);
};
onChange=(e)=>{
  this.setState({quizTitle:e.target.value})
}
onSubmit=(e)=>{
  this.state.optionArray.push(this.state.option1);
  this.state.optionArray.push(this.state.option2);
  this.state.optionArray.push(this.state.option3);
  this.state.optionArray.push(this.state.option4);

  const {questionName, optionArray, quizTitle,courseId,correctAnswer } = this.state;
  e.preventDefault();
  this.ref.add({
      quizTitle,
      questionName,
      optionArray,
      courseId,
      correctAnswer

  }).then((docRef)=>{
      console.log(docRef.id);
      this.setState({
        quizTitle:"",
        questionName: "",
        optionArray: [],
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        correctAnswer:''
      })
      
  })
  .catch((error)=>{
      console.error(error);
  });
  
}
    render() {
        return (
            <div className='course-body'>

            
      <div className='course'>
     
        <div className="course-title">
          <label htmlFor="" className='col-xs-2 course-name'>Quiz Details</label>{" "}
          <input type="text" name='quizTitle' onChange={this.onChange} className='form-control col-xs-6 course-input'  placeholder="Enter quiz title" required />
          <input type="text" name="questionName" value={this.state.questionName} onChange={this.onQuestionChange} className='form-control col-xs-6 course-input' placeholder="Enter the question" required/>
          <input value={this.state.option1} onChange={this.onTitleChange} type="text" className="form-control col-xs-6 course-input" name="option1" placeholder="Enter Choice" required/>
          <input value={this.state.option2} onChange={this.onTitleChange} type="text" className="form-control col-xs-6 course-input" name="option2" placeholder="Enter Choice" required/>
          <input value={this.state.option3} onChange={this.onTitleChange} type="text" className="form-control col-xs-6 course-input" name="option3" placeholder="Enter Choice" required/>
          <input value={this.state.option4} onChange={this.onTitleChange} type="text" className="form-control col-xs-6 course-input" name="option4" placeholder="Enter Choice" required/>
          <input type="text" name="correctAnswer" value={this.state.correctAnswer} onChange={this.onCorrectAnswer} className='form-control col-xs-6 course-input' placeholder="Enter Correct Answer" required/>
          <button onClick={this.onSubmit} type='submit' className='btn btn-danger submit'> Submit</button>

        </div>
     </div>
    </div>
        )
    }
}

export default addQuiz
