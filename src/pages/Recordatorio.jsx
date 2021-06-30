import React from 'react'
import SideBar from './../components/sideBar'

const Recordatorio = () =>{   

    return (
        <div>
            <br/>
            <div className="row">               
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-9 container">
                        <h1 className="titleEstadistica">WELCOME RECORDATORIOS</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Recordatorio;