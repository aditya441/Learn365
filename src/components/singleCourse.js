import React, { Component } from 'react';

class singleCourse extends Component {
    render () {
        return (
            <div>
                {this.props.sections.map(section => (
                    <div>
                        <h4>{section.name}</h4>
                    </div>
                ))}
            </div>
            

        )
    }
}
export default singleCourse;




{/* <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#section1Submenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">section 1: creating Promises</a>
                            <ul className="collapse list-unstyled" id="section1Submenu">
                            
                            <a href="#" data-target="#videoModal" data-toggle="modal">1. Course Introduction</a> */}
                            
                            {/* <div className="modal" id="videoModal" tabindex="-1">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" width="660" height="315" src="https://www.youtube.com/embed/bum_19loj9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>  
                                    </div>
                                </div>
                                
                            </div>  */}

            //                 <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">2.callbacks vs promises</a>
            //                         </li>
            //                     </Link>
            //                 </div>    
            //                 <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">3.callbacks vs Thens</a>
            //                         </li>
            //                     </Link>
            //                 </div>    
            //                 </ul>
            //             </li>
            //             <li>
            //                 <a href="#section2Submenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">section-2: chaining promises</a>
            //                 <ul className="collapse list-unstyled" id="section2Submenu">
            //                     <div className="FormField">
            //                         <a href="#" data-target="#videoModal2" data-toggle="modal">1.Collection Data Structures</a>
            //                         <div className="modal" id="videoModal2" tabindex="-1">
            //                             <div className="modal-dialog modal-lg">
            //                                 <div className="modal-content">
            //                                     {/* <div className="modal-header">
            //                                         <h2 className="text-danger">introduction video</h2>
            //                                     </div> */}
            //                                     <div className="embed-responsive embed-responsive-16by9">
            //                                         <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/QswQA1lRIQY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                     </div>  
            //                                 </div>
            //                             </div>    
            //                         </div> 
            //                     </div>
            //                 {/* <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">Lesson 1: Collection Data Structures</a>
            //                         </li>
            //                     </Link>
            //                 </div>     */}
            //                 <div className="FormField">
            //                     <a href="#" data-target="#videoModal3" data-toggle="modal">2.Recursion</a>
            //                     <div className="modal" id="videoModal3" tabindex="-1">
            //                         <div className="modal-dialog modal-lg">
            //                             <div className="modal-content">
            //                                 {/* <div className="modal-header">
            //                                     <h2 className="text-danger">introduction video</h2>
            //                                 </div> */}
            //                                 <div className="embed-responsive embed-responsive-16by9">
            //                                     <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/B0NtAFf4bvU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                 </div>  
            //                             </div>
            //                         </div>    
            //                     </div> 
            //                 </div>   
                            
            //                 {/* <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">Lesson 2: Recursion</a>
            //                         </li>
            //                     </Link>
            //                 </div>     */}
            //                 <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">3.Trees</a>
            //                         </li>
            //                     </Link>
            //                 </div>
            //                 <div className="FormField">
            //                     <Link to='/video'>
            //                         <li>
            //                             <a href="#">4.Maps and Hashtags</a>
            //                         </li>
            //                     </Link>
            //                 </div>      
            //                 </ul>
            //             </li>
            //         </ul>
            //     </nav>
            //     <div class="embed-responsive embed-responsive-16by9">
            //         <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bum_19loj9A"></iframe>
            //      </div>
            //     {/* <div className="content">
            //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //             <button type="button" id="sidebarCollapse" className="btn btn-info">
            //                 <i className="fas fa-align-justify"></i><span></span>
            //             </button>
            //         </nav>
            //     </div>             */}
               
            // </div>


            // // <div id="wrapper">
            // //     <div className="overlay">
            // //         <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            // //             <ul className="nav sidebar-nav">
            // //                 <li className="sidebar-brand">
            // //                     <a href="#">Sections</a>
            // //                 </li>
            // //                 <div className="FormField">
            // //                 <Link to='/video'>
            // //                 <li> <a href="#">section1</a></li>
            // //                 </Link>
                            
            // //             </div>
            // //             {/* <li> <a href="#">section2</a></li> */}
            // //                 {/* <li> <a href="#">section1</a></li> */}
                            
            // //             </ul>