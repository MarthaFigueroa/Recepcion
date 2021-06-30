import React from 'react'
import SideBar from './../components/sideBar'

const Estadistica = () =>{   

    return (
        <div>
            <br/>
            <div className="row">               
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-9 container">
                        <h1 className="titleEstadistica">WELCOME ESTADISTICAS</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Estadistica;