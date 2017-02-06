import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import {CreateEmployeeRoute} from './routes/create_employee';
import {CreateEmployeeContainer} from './containers/create_employee';


ReactDOM.render(
  <Relay.RootContainer
    Component={CreateEmployeeContainer}
    route={new CreateEmployeeRoute()} />,
  document.getElementById('root')
);