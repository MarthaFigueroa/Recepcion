import React from 'react'
import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/sideBar.jsx'
import Tabs from '../../components/GivenMasks/givenMasksTabs.jsx'

const Mascarillas = () =>{   

    return (
        <div className="cont">
            <NavBar />
            <div className="row">               
                <div className="col-md-2">
                    <SideBar/>
                </div>            
                <div className=" col-md-10 container">
                    <Tabs/>          
                </div>  
            </div>  
        </div>
    )
}
export default Mascarillas;
