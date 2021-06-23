import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import addPrestamo from '../pages/addPrestamo'
import Principal from '../pages/Principal.jsx'

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/newPrestamo" component={addPrestamo} />
            </Switch>
        </Router>
    )
}
export default App