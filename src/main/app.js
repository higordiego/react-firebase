import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css'

import Menu from '../template/menu'
import Routes from './routes'

export default  props => (
  <div className="container-fluid">
    <Menu />
    <Routes />
  </div>
)
