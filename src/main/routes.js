import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about/index'
import FormAccount from '../template/formAccount'
import Icon from '../template/iconAction'

export default props => (
  <Router history={hashHistory}>
    <Route path="/dashboard" component={Icon} />
    <Route path="/dashboard/account/add" component={FormAccount} />
    <Route path="/dashboard/about" component={About} />
    <Redirect from='*' to='/dashboard' />
  </Router>

)
