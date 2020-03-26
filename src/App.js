import React, { Component } from 'react';
import EmployeePage from './component/Output/EmployeePage'
import './App.css';
import { Switch, Route,NavLink } from 'react-router-dom';
import Login from './container/Login';
import PasswordReset from './container/PasswordReset';
import Sidebar from "react-sidebar";
import classes from './App.css'
import Poster from './component/Output/Poster'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div >
        <Sidebar
        sidebar={
          <ul>
          <li className={classes.NavigationItem}><NavLink  to="/"activeClassName={classes.active}>Home</NavLink></li>
          <li className={classes.NavigationItem}><NavLink  to="/PasswordReset"activeClassName={classes.active}>Password Reset</NavLink></li>
          <li className={classes.NavigationItem}><NavLink  to="/Poster"activeClassName={classes.active}>Nectar Infotel</NavLink></li>
        </ul>  
        
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "blue" } }}
      >
        <button style={{"color":"black","text-decoration": "underline","background-color": "chartreuse"}} onClick={() => this.onSetSidebarOpen(true)}>
          Important Links
        </button>
      </Sidebar>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route
          path={"/EmployeePage"} component={EmployeePage}>
                </Route>
          <Route path={"/PasswordReset"} component={PasswordReset}></Route>      
          <Route path={"/Poster"} component={Poster}></Route>      
        </Switch>
      </div>
    );
  }
}

export default App;
