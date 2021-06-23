import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Principal from '../pages/Principal'

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
export default App