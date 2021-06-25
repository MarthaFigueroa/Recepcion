import React from 'react'
import Button from './../components/addPrestamoButton.jsx'
import NavBar from './../components/NavBar.jsx'
import Table from './../components/tables/prestamosTable.jsx'
import SideBar from './../components/sideBar'

const Principal = () =>{
    

    return (
        <div>
            <NavBar />
            <Button />
            <br/>
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9 container">
                        <h1>HOLAAAAA</h1>
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;