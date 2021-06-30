import React from 'react'
import Table from '../components/prestamo/tables/prestamosTable'
import SideBar from './../components/sideBar'
import { Link } from 'react-router-dom'
const Prestamos = () =>{   

    return (
        <div>           
            <br/>
            <div>
                <div className="row">     
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className="col-md-9 container">
                        <br/>
                        <Table />                      
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default Prestamos;