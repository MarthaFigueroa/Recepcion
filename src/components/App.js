import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import addPrestamo from '../pages/AddPrestamo'
import Principal from '../pages/Principal.jsx'
import prestamos from '../pages/Prestamos'
import editPrestamo from '../pages/EditPrestamo.jsx'
import historial from '../pages/Historiales'
import categoria from '../pages/Categoria'
import mascarilla from '../pages/Mascarillas'
import estadistica from '../pages/Estadistica'
import inventario from '../pages/Inventario'
import recordatorio from '../pages/Recordatorio'
import defectuosos from '../pages/Defectuoso'
import usuario from '../pages/Usuario'
import editUsuario from '../pages/EditUser.jsx'
import addUsuario from '../pages/AddUser'


function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/prestamos" component={prestamos} />
                <Route exact path="/newPrestamo" component={addPrestamo} />
                <Route exact path="/editPrestamo" component={editPrestamo} />
                <Route exact path="/historial" component={historial} />
                <Route exact path="/categoria" component={categoria} />
                <Route exact path="/mascarilla" component={mascarilla} />
                <Route exact path="/estadistica" component={estadistica} />
                <Route exact path="/inventario" component={inventario} />
                <Route exact path="/recordatorio" component={recordatorio} />
                <Route exact path="/defectuosos" component={defectuosos} />
                <Route exact path="/usuario" component={usuario} />
                <Route exact path="/newUser" component={addUsuario} />
                <Route exact path="/editUser" component={editUsuario} />
            </Switch>
        </Router>
    )
}
export default App