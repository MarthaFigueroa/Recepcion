import React from 'react'
import SideBar from './../../components/sideBar'
import BarCharts from '../../components/Charts/PrestamosCharts.jsx'
import PieCharts from '../../components/Charts/PieChart.jsx'
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
                        <BarCharts/>              
                        <PieCharts/>              
                    </div>  
                </div>  
        </div>
    )
}
export default Estadistica;