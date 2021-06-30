import React from 'react'
import SideBar from './../components/sideBar'

const Mascarillas = () =>{   

    return (
        <div>
            <br/>
            <div className="row">               
                    <div className="col-md-3">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-9 container">
                        <h1 className="titleMascarillas">WELCOME MASCARILLAS</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Mascarillas;