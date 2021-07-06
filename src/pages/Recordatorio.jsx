import React from 'react'
import SideBar from './../components/sideBar'
import NavBar from './../components/NavBar.jsx'

const Recordatorio = () =>{   

    return (
        <div>
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <h1 className="titleEstadistica">WELCOME RECORDATORIOS</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Recordatorio;