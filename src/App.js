import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Switcher from './modules/Switcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switcher />
      </div>
    );
  }
}

export default App;
