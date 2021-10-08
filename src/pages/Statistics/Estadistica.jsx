import React from 'react'
import SideBar from './../../components/sideBar'
import Objects from '../../components/Charts/chartsTabs.jsx'
import NavBar from './../../components/NavBar.jsx'

const Estadistica = () =>{   

    return (
        <div className="cont">
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className="col-md-10 container">
                        {/* <BarCharts/>               */}
                        <Objects/>            
                    </div>  
                </div>  
        </div>
    )
}
export default Estadistica;