import React, {Suspense, useState} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Tabs from './Tabs'
import basePageRoutes from './router'

const initPages = ['page1', 'page2']

function App() {
  const [pages] = useState(initPages)

  return (
    <Router>
      <Tabs pages={pages}/>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {basePageRoutes.map(route => (
            <Route
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
