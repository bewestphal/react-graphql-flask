import 'babel-polyfill';
import React from 'react';


class HelloComponent extends React.Component {
  render() {
    return (<div>Hello { this.props.employee.name }</div>);
  }
}

module.exports = {HelloComponent};