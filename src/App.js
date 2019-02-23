import React, { Component } from 'react';
import SignUp from './components/Form/index';
import './App.css';

class App extends Component {
  submit = values => {
    alert ('Thank you for registering!');
    console.log(values);
  }
  render() {
    return (
      <div className="App">
        <SignUp onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
