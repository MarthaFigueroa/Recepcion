import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Principal from '../pages/Principal.jsx'
import historial from '../pages/History/Historiales'
import categoria from '../pages/Categories/Categories'
import estadistica from '../pages/Statistics/Estadistica'
import inventario from '../pages/Objects/Inventario'
import recordatorio from '../pages/Reminders/Reminders'

import prestamos from '../pages/Prestamos/Prestamos.jsx'
import defectuosos from '../pages/DefectiveObjects/DefectiveObjects'
import usuario from '../pages/Users/User'
import mascarilla from '../pages/Masks/Masks'
import mascarillaEntregada from '../pages/GivenMasks/GivenMasks.jsx'

import addPrestamo from '../pages/Prestamos/AddPrestamo.jsx'
import addUsuario from '../pages/Users/AddUser.jsx'
import addDefectuoso from '../pages/DefectiveObjects/AddDefectiveObject.jsx'
import addMascarilla from '../pages/Masks/AddMask'
import addObjeto from '../pages/Objects/AddObject'
import addMascarillaEntregada from '../pages/GivenMasks/AddGivenMask.jsx'

import editPrestamo from '../pages/Prestamos/EditPrestamo.jsx'
import editUsuario from '../pages/Users/EditUser.jsx'
import editDefectuoso from '../pages/DefectiveObjects/EditDefectiveObject.jsx'
import editMascarilla from '../pages/Masks/EditMask.jsx'
import editMascarillaEntregada from '../pages/GivenMasks/EditGivenMask.jsx'
import editObjeto from '../pages/Objects/EditObject.jsx'



function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />

                {/* Prestamso */}
                <Route exact path="/prestamos" component={prestamos} />
                <Route exact path="/newPrestamo" component={addPrestamo} />
                <Route exact path="/editPrestamo/:id" component={editPrestamo} />

                <Route exact path="/historial" component={historial} />
                <Route exact path="/categoria" component={categoria} />

                {/* Mascarillas */}
                <Route exact path="/mascarilla" component={mascarilla} />
                <Route exact path="/newMascarilla" component={addMascarilla} />
                <Route exact path="/editMascarilla/:id" component={editMascarilla} />

                {/* Mascarillas Entregadas */}
                <Route exact path="/mascarillasEntregadas" component={mascarillaEntregada} />
                <Route exact path="/newMascarillaEntregada" component={addMascarillaEntregada} />
                <Route exact path="/editMascarillaEntregada/:id" component={editMascarillaEntregada} />


                <Route exact path="/estadistica" component={estadistica} />
                <Route exact path="/recordatorio" component={recordatorio} />

                {/* Inventario de Objetos */}
                <Route exact path="/inventarioObjetos" component={inventario} />
                <Route exact path="/newObjeto" component={addObjeto} />
                <Route exact path="/editObjeto/:id" component={editObjeto} />


                {/* Objetos Defectuosos */}
                <Route exact path="/defectuosos" component={defectuosos} />
                <Route exact path="/newDefectuoso/:id/:id_object" component={addDefectuoso} />
                <Route exact path="/editDefectuoso/:id" component={editDefectuoso} />
                <Route exact path="/newDefectuoso" component={addDefectuoso} />

                {/* Usuarios */}
                <Route exact path="/usuario" component={usuario} />
                <Route exact path="/newUser" component={addUsuario} />
                <Route exact path="/editUser/:id" component={editUsuario} />
            </Switch>
        </Router>
    )
}
export default App