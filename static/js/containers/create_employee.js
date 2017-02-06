import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';

import {CreateEmployeeForm}from '../components/create_employee_form'


var CreateEmployeeContainer = Relay.createContainer(CreateEmployeeForm, {
  fragments: {
    employee: () => Relay.QL`
      fragment on EmployeeType {
        name,
      }
    `,
  },
});

module.exports = {CreateEmployeeContainer};