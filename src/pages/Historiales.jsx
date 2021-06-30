import React from 'react'
import SideBar from './../components/sideBar'
import TableHistorial from './../components/historial/table/historialTable'

const Historiales = () =>{   

    return (
        <div>
            <br/>
            <div className="row">               
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-9 container">
                           <TableHistorial/>           
                    </div>  
                </div>  
        </div>
    )
}
export default Historiales;