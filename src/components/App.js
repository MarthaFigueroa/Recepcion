import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import addPrestamo from '../pages/Prestamos/AddPrestamo.jsx'
import prestamos from '../pages/Prestamos/Prestamos.jsx'
import editPrestamo from '../pages/Prestamos/EditPrestamo.jsx'
import Principal from '../pages/Principal.jsx'
import historial from '../pages/History/Historiales'
import categoria from '../pages/Categories/Categoria'
import mascarilla from '../pages/Masks/Mascarillas'
import estadistica from '../pages/Statistics/Estadistica'
import inventario from '../pages/Inventario'
import recordatorio from '../pages/Reminders/Recordatorio'
import defectuosos from '../pages/DefectiveObjects/Defectuoso'
import usuario from '../pages/Users/User'
import editUsuario from '../pages/Users/EditUser.jsx'
import addUsuario from '../pages/Users/AddUser.jsx'


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