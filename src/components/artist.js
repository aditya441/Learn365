import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Collection from './songsCollection.js';

class Artist extends Component {
    state = {
        artists: this.props.data,
        songs: [],
        artistName: ''
        
    }
    

    handleButtonClicked = ev => {
        // console.log(ev.curr(entTarget.value)
       this.state.artists.map(artist => {
           if(ev.currentTarget.value === artist.artistName){
                this.setState({
                    songs: [...artist.songs]
                })
           }
       })
        
      };
     
    render () {
        console.log(this.state.songs);
        return (
            <div className="main-container">
               <nav className= "leftBar">
                   {this.state.artists.map(artist => (
                        <div className="box1">
                                <button 
                                    value={artist.artistName}
                                    
                                    onClick={this.handleButtonClicked}
                                >
                                   {artist.artistName}
                                </button>      
                        </div>
                   ))}
               </nav>
               <div className="body">
                   <Collection data={this.state.songs} name={this.state.artistName}/>
               </div>
               <div className="footer">
               </div>
            </div>
        )
        
    }
}
export default Artist;