import React, { Component }  from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink to="/">Schedule</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">Users</NavLink>  
        </NavItem> 
      </Nav>
    )
  }
}