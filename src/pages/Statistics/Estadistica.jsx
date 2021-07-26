import React from 'react'
import SideBar from './../../components/sideBar'
import BarCharts from '../../components/Charts/PrestamosCharts.jsx'
import PieCharts from '../../components/Charts/PieChartJS.jsx'
import Objects from '../../components/Charts/ObjectsCharts/objectsChartsTabs.jsx'
import NavBar from './../../components/NavBar.jsx'

const Estadistica = () =>{   

    return (
        <div>
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        {/* <BarCharts/>               */}
                        <Objects/>            
                    </div>  
                </div>  
        </div>
    )
}
export default Estadistica;