import React from 'react'
import {render} from 'react-dom'
import css from './styles/style.styl'
import Root from './components/Root'
import store from './store'

render(
  <Root store={store} />,
  document.getElementById('root')
);
