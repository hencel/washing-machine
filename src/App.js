import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import { Reservations } from "./components";
import Menu from './components/Menu';
import Users from "./pageUsers/Users";

export default class App extends Component {
  render() {
    return (
     <Router>
       <Menu />;
     <Switch>
       <Route exact path='/' component={ Reservations } />
       <Route path='/users' component={Users} />
     </Switch>
   </Router>
    )
  }
}
