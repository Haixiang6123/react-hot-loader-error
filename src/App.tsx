import React, {lazy, Suspense} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Tabs from './components/Tabs'

function App() {
  return (
    <Router>
      <Tabs/>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/page1" component={lazy(() => import(/* webpackPrefetch: true */ './pages/Page1'))} />
          <Route path="/page2" component={lazy(() => import(/* webpackPrefetch: true */ './pages/Page2'))} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
