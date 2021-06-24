import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import addPrestamo from '../pages/addPrestamo'
import Principal from '../pages/Principal.jsx'
import listPrestamos from '../pages/listPrestamos.jsx'

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/newPrestamo" component={addPrestamo} />
                <Route exact path="/listPrestamos" component={listPrestamos} />
            </Switch>
        </Router>
    )
}
export default App