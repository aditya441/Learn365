import React, { Component } from 'react'
import firebase from 'firebase'

export class showingQuiz extends Component {
    constructor(props){
        super(props);
        this.state={
          quiz:[],
        }
    }
    fetchData = (e) =>{
        var don =[]
        const db=firebase.firestore().collection("quiz").where("courseId", "==", "C3MngP0rGQ2xeZA3Z53k")
        db.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    this.setState({quiz:[doc.data()]})
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
    render() {
        console.log(this.state.quiz)
        return (
            <div>
                <button onClick={this.fetchData}>hii</button>
            </div>
        )
    }
}

export default showingQuiz
