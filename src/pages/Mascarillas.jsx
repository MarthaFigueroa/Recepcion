import React from 'react'
import SideBar from './../components/sideBar'
import NavBar from './../components/NavBar.jsx'

const Mascarillas = () =>{   

    return (
        <div>
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <h1 className="titleMascarillas">WELCOME MASCARILLAS</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Mascarillas;