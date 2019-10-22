import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteCourse from './DeleteCourse';
// // import CreateSection from "./CreateSection";
// import "./../course.css";
import firebase from "firebase";

class MyCourse extends Component {
  constructor(props) {
    super(props);
    //     // this.ref = firebase.firestore().collection("courses");

    this.state = {
      user: "",
      userId: this.props.user.uid,
      courses: []
      // onClick: []
    };
  }

  componentDidMount() {
    function getuser() {
      return new Promise(async (resolve, reject) => {
        await firebase.auth().onAuthStateChanged(async user => {
          if (user) {
            resolve(user);
            return;
          }
          reject("error");
        });
      });
    }
    getuser().then(async user => {
      let arr = [];
      const userData = await firebase
        .firestore()
        .collection("courses")
        .where("userId", "==", user.uid)
        .get();
      userData.forEach(e => {
        // console.log('e  :',e.id)
        // console.log(e.data())
        let obj = e.data();
        obj["courseId"] = e.id;
        arr.push(obj);
        console.log(arr);
      });
      // console.log(this.state.courses)
      this.setState({ courses: arr });
    });
  }
  handleDelete = id => {
    console.log(id);
    this.setState({courses:[...this.state.courses.filter(course=> course.courseId !== id)]});
    this.delete(id)
    this.deleteSections(id)
  };

      delete=(id)=>{
        firebase.firestore().collection('courses').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          // this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
      deleteSections=(id)=>{
        firebase.firestore.collection('sections')
        .where("courseId", "==", id)
        .delete().then(()=>{
          console.log('sections successfully deleted!')
        }).catch((err)=>{
          console.error('occuring error: ',err)
        })

      }

  render() {
    // console.log(this.state.courses);
    return (
      <div>
        <nav className="course-header">
          <h3>My Courses</h3>
          <tr className="course-header-list">
            <th><Link to={'/Courses'}>All Courses</Link></th>
            <th>
              <a href="/welcome">Collections</a>
            </th>
            <th><Link to={`/${this.props.user.displayName}/MyCourse/`}> My Courses </Link></th>
            <th>Archived</th>
          </tr>
        </nav>

        <div className="card-wrapper">
          {this.state.courses.map(course => (
            <DeleteCourse key={course.courseId} id={course.courseId} course={course} deleteCourse={this.handleDelete}/>
             
    ))}
        </div>
      </div>
    );
  }
}

export default MyCourse;
