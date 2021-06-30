import React from 'react'
import Button from './../components/addPrestamoButton.jsx'
import NavBar from './../components/NavBar.jsx'
import Table from './../components/tables/PrestamosTable.jsx'
import SideBar from './../components/sideBar'

const Principal = () =>{
    

    return (
        <div>
            <NavBar />
            <Button />
            <br/>
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 container">
                        <h1>HOLAAAAA</h1>
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;