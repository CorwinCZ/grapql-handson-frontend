import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from 'react-apollo';

import Switcher from './modules/Switcher';

import apolloClient from './apolloClient';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <Switcher />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
