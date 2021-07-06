import React from 'react'
import NavBar from './../components/NavBar.jsx'
import logo from './../public/img/logo-universidad-Atlantico.png'
import SideBar from './../components/sideBar.jsx'

const Principal = () =>{
    

    return (
        <div>
            <NavBar />
            {/* <Button /> */}
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 container text-center">
                        {/* <h1>HOLAAAAA</h1> */}
                        {/* <Table /> */}
                        <img src={logo} className="text-center" alt="" width="700" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;