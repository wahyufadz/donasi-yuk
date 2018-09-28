import React, { Component } from 'react';

import NavBar from './navigation/NavBar'
import ContentRouter from './navigation/ContentRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ContentRouter/>
      </div>
    );
  }
}

export default App;
