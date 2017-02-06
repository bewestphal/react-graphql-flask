import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';


class EmployeeRoute extends Relay.Route {
  static routeName = 'EmployeeRoute';
  static queries = {
    employee: () => Relay.QL`
        query { employee(name: $name) }
      `,
  };
}

module.exports = {EmployeeRoute};