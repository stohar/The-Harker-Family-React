import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import WiFiTermsOfService from './views/wi-fi-terms-of-service'
import WiFiConnectionSuccessful from './views/wi-fi-connection-successful'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route
          component={WiFiTermsOfService}
          exact
          path="/wi-fi-terms-of-service"
        />
        <Route
          component={WiFiConnectionSuccessful}
          exact
          path="/wi-fi-connection-successful"
        />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
