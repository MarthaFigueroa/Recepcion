import React from 'react'
import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/sideBar.jsx'
import Tabs from '../../components/Prestamos/prestamosTabs.jsx'

const Principal = () =>{

    return (
        <div>
            <NavBar />
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 container">
                        <Tabs/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;