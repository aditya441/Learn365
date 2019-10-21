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
  };

      delete=(id)=>{
        firebase.firestore().collection('courses').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          // this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

  render() {
    console.log(this.state.courses);
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
            <DeleteCourse id={course.courseId} course={course} deleteCourse={this.handleDelete}/>
              // <div key={course.courseId} className="box">
              //   {/* {console.log(course)} */}

              //   <div className="card-image">
              //     <img
              //       src="https://i.udemycdn.com/course/240x135/1036600_93c4_5.jpg"
              //       alt="How to Set your Course Goals: Official Udemy Course"
              //       width="240"
              //       height="135"
              //     ></img>
              //   </div>
              //   <span className="course-body">
              //     <h7>
              //       <Link to={`/show/${course.key}`}>{course.courseName}</Link>
              //     </h7>
              //     <p>Learn 365 Team,Official Learn 365 Instructor Acoount</p>
              //   </span>

              //   <div className="course-footer">
              //     <div className="progress">
              //       <p>progress bar</p>
              //     </div>
              //     <Link to={`/${course.key}/Sections`}>
              //       <button type="button" class="btn btn-danger btn-sm">
              //         Start Course
              //       </button>
              //     </Link>
              //     <button
              //       onClick={this.handleDelete(course.courseId)}
              //       style={{ marginLeft: "30px" }}
              //       type="button"
              //       class="btn btn-danger btn-sm"
              //     >
              //       Delete
              //     </button>
              //   </div>
              // </div>
            
    ))}
        </div>
      </div>
    );
  }
}

export default MyCourse;
