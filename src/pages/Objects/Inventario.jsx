import React from 'react'
import SideBar from '../../components/sideBar'
import NavBar from '../../components/NavBar.jsx'
import Tabs from '../../components/Objects/objectsTabs.jsx'

const Inventario = () =>{   

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
export default Inventario;