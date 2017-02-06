import 'babel-polyfill';
import React from 'react';

import {CreateEmployeeMutation} from '../mutations/create_employee'


class CreateEmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.relay.commitUpdate(
      new CreateEmployeeMutation({name: this.state.value})
    );

    alert('A name was submitted: ' + this.state.value + ', Modify the /static/query.js name to see it appear on query!');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = {CreateEmployeeForm};