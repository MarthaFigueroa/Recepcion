import React from 'react'
import SideBar from './../components/sideBar'
import TableInventario from './../components/inventario/table/inventarioTable'

const Inventario = () =>{   

    return (
        <div>
            <br/>
            <div className="row">               
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-9 container">
                        <TableInventario/>          
                    </div>  
                </div>  
        </div>
    )
}
export default Inventario;