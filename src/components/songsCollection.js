import React, { Component } from 'react';
import Footer from './footer';
class Collection extends Component {
    state = {
        title: ''
    }

    handleButtonClicked = ev => {
        // console.log(ev.curr(entTarget.value)
       this.props.data.map(song => {
           if(ev.currentTarget.value === song.title){
                this.setState({
                   title: song.title
                })
           }
       })
        
      };
    
    render () {
        console.log(this.props.data[0]);
        return (
            <div>
            <div>
                
                {this.props.data.map(song => (
                    <div>
                        <button 
                                    value={song.title}
                                    
                                    onClick={this.handleButtonClicked}
                                >
                                    {song.title}
                                </button>  
                    {/* <h2>{song.title}</h2> */}
                    </div>
                ))}
            </div>
           <div className="collection-footer">
           <Footer title={this.state.title}/>
           </div>
                
            
            </div>
        )
    }
}
export default Collection;