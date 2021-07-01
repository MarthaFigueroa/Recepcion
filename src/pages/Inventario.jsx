import React from 'react'
import SideBar from './../components/sideBar'
import TableInventario from './../components/Inventario/inventarioTable'
import NavBar from './../components/NavBar.jsx'

const Inventario = () =>{   

    return (
        <div>
            <NavBar />
            <br/>
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <TableInventario/>          
                    </div>  
                </div>  
        </div>
    )
}
export default Inventario;