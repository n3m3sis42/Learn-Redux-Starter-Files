import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Single from './Single'
import PhotoGrid from './PhotoGrid'

export default class Main extends Component {

  render() {
    return (
      <div>
        <Link to="/"><h1>Reduxstagram</h1></Link>
        <Switch>
          <Route exact path='/' render={(props) => {
            return <PhotoGrid
                history={props.history}
              />}
          } />        
          <Route exact path='/view/:postId' render={(props) => {
            return <Single
                history={props.history}
              />}
          } />
        </Switch>
      </div>
    )
  }

}
