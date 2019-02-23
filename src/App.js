import React, { Component } from 'react';
import SignUp from './components/Form/index';
import Home from './components/Home/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  submit = values => {
    alert ('Thank you for registering!');
    console.log(values);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
