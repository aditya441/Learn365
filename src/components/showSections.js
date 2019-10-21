import React, { Component } from 'react';
import config from '../Firebase';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import secondaryApp from '../Firebase';

class Display extends Component {
    // constructor(props) {
    //   super(props);
    //   this.ref = secondaryApp.firestore().collection('sections');
    //   this.unsubscribe = null;
    //   this.state = {
    //     sections: []
    //   };
    // }
    //   onCollectionUpdate = (querySnapshot) => {
    //     const sections = [];
    //     querySnapshot.forEach((doc) => {
    //       const { courseId,sectionName,videos } = doc.data();
    //       sections.push({
    //         key: doc.id,
    //         doc, // DocumentSnapshot
    //         courseId,
    //         sectionName,
    //        videos
    //       });
    //     });
    //     this.setState({
    //      sections
    //    });
    //   }
    
    //   componentDidMount() {
    //     this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    //   }
    
    
    render() {
        return (
            <div>
              <h3>hello world</h3>
                {/* {this.state.sections.map(videos=>
                videos.map(video => {
                    <h2>{video.videoName}</h2>
                }) */}
                
                )}
            </div>
        )
    }
}
export default Display;