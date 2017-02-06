import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import {HelloContainer} from './containers/hello';
import {EmployeeRoute} from './routes/employee';


ReactDOM.render(
    <Relay.RootContainer
    Component={HelloContainer}
    route={new EmployeeRoute({name: 'Peter'})} />, // Enter a name to query here
    document.getElementById('root')
);