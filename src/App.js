import React, { Component } from 'react';
import './App.css';
import Register from './components/registration'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> Learn365</h2>
        </div>
        
      <Login />
        {/* <Register /> */}
       
      </div>
    );
  }
}

export default App;
