import React, { Component } from 'react';
import EmployeePage from './component/Output/EmployeePage'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './container/Login'

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route
          path={"/EmployeePage"} component={EmployeePage}>
                </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
