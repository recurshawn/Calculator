import React, { Component } from 'react';
import Calculator from './Calculator';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Calculator />
          <hr/>
          <p>This calculator app was built by me as a quick hack to practice my ReactJS skills.</p>
          <p>The calculator is a React Component that can be reused later in the future. Can be made embeddable to use within other webpages too.</p>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
