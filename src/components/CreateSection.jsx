import React, {Component} from 'react';
import AddVedio from './AddVedio';
class CreateSection extends Component{
    state={
        onClick:[],
        
    }

    
    handleChange=()=>{
        this.setState({onClick: this.state.onClick.concat([1])})
    }

    render(){
        return(
            <div>
                

                <div className='form-group'>
                    <label htmlFor="" className='col-xs-2 section-name'>Section</label>
                    <input type="text" className='form-control col-xs-6 course-input' placeholder='enter section title'/>
                    <button onClick={this.handleChange} type="button" class="btn btn-link">+ add video</button>
                </div>
                

                    { this.state.onClick.map ( ()=> 
                         (
                         <AddVedio />
                         ))}
                
                   

            </div>
        )
    }
}


export default CreateSection;