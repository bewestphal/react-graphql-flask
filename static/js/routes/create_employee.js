import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';


class CreateEmployeeRoute extends Relay.Route {
  static routeName = 'CreateEmployeeRoute';
  static queries = {
    employee: () => Relay.QL`
        query { employee }
      `,
  };
}

module.exports = {CreateEmployeeRoute};