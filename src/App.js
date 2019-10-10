import React, { Component } from 'react';
import Header from './components/HeaderHomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Pageheader">
        <Header />
        </div>
      </div>
    );
  }
}

export default App;
