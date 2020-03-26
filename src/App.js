import React, { Component } from 'react';
import EmployeePage from './component/Output/EmployeePage'
import './App.css';
import { Switch, Route,NavLink } from 'react-router-dom';
import Login from './container/Login';
import PasswordReset from './container/PasswordReset';
import Sidebar from "react-sidebar";
import classes from './App.css'
import Poster from './component/Output/Poster'
import Layout from './Layout'
class App extends Component {
  
  render() {
    return (
      <div >
        <Layout>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route
          path={"/EmployeePage"} component={EmployeePage}>
                </Route>
          <Route path={"/PasswordReset"} component={PasswordReset}></Route>      
          <Route path={"/Poster"} component={Poster}></Route>      
        </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
