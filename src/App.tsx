import React, {lazy, Suspense} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Tabs from './components/Tabs'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Header tabs */}
        <Tabs/>

        {/* Route content */}
        <Switch>
          <Route path="/page1" component={lazy(() => import('./pages/Page1'))}/>
          <Route path="/page2" component={lazy(() => import('./pages/Page2'))}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
