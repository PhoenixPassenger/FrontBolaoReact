import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Sort from './components/Sort'
import Round from './components/RoundCreate'
import ChooseComp from './components/ChooseCompetition'
import RoundCreated from './components/RoundCreated'
import Ranking from './components/Ranking'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/sort" component={Sort} />
            <Route exact path="/round" component={Round} />
            <Route exact path="/roundname" component={ChooseComp} />
            <Route exact path="/roundcreated" component={RoundCreated} />
            <Route exact path="/ranking" component={Ranking} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
