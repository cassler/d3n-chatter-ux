import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Stream from './components/Stream';



import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stream />
      </div>
    );
  }
}

export default App;
