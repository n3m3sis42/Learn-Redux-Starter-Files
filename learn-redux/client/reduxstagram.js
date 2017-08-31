import React from 'react'
import {render} from 'react-dom'
import css from './styles/style.styl'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'

render(
  <Router><Main /></Router>, document.getElementById('root')
);
