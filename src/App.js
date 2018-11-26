import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './apolloClient';
import Switcher from './modules/Switcher';

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
