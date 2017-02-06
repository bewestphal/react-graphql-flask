import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';

class CreateEmployeeMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { createEmployee }`;
  };

  getVariables() {
    return {
      name: this.props.name
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on EmployeeType { 
        name
      }
    `;
  }

  getConfigs() {
    return [];
  };
}

module.exports = {CreateEmployeeMutation};