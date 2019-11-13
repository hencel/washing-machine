import React, {Component} from 'react';
import { Provider } from "react-redux";
import storeUsers from "../storeUsers";
import show from "../components/show";
import NewUserForm from "../components/userForm";
import { Form } from 'reactstrap';

export default class User extends Component {
  render() {
    return (
      <Provider store={storeUsers}>
      <Form style={{ padding: 15 }}>
        <h2>Users</h2>
        <NewUserForm onSubmit={show} />
      </Form>
    </Provider>
    )
  }
}
