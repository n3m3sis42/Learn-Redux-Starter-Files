import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Main from './main'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router><Main /></Router>
  </Provider>
)

export default Root
