import React, {Component} from 'react';

class AddVedio extends Component{

    render(){
        return(
            <div>
                <div className='vedio-detail'>
                    <div className='form-inline vedio-title'>
                    <label htmlFor="" className='col-xs-2 vedio-title'>Video title</label> <input type="text" className='form-control col-xs-6 course-input' placeholder='enter video title'/>

                    </div>
                    <div className='form-inline'>

                    <label htmlFor="" className='col-xs-2 vedio-url' >Video Url</label> <input type="text" className='form-control col-xs-6 course-input' placeholder='enter video url'/>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default AddVedio;