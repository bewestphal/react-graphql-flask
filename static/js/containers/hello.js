import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';

import {HelloComponent} from '../components/query';


var HelloContainer = Relay.createContainer(HelloComponent, {
    fragments: {
      employee: () => Relay.QL`
        fragment on EmployeeType {
            name
        }`,
    },
  }
);

module.exports = {HelloContainer};