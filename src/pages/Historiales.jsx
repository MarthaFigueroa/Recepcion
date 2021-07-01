import React from 'react'
import SideBar from './../components/sideBar'
import TableHistorial from './../components/Historial/historialTable.jsx'
import NavBar from './../components/NavBar.jsx'

const Historiales = () =>{   

    return (
        <div>
            <NavBar />
            <br/>
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                           <TableHistorial/>           
                    </div>  
                </div>  
        </div>
    )
}
export default Historiales;