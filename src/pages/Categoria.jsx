import React from 'react'
import SideBar from './../components/sideBar'
import NavBar from './../components/NavBar.jsx'

const Categoria = () =>{   

    return (
        <div>
            <NavBar />
            <br/>
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <h1 className="titleCategoria">WELCOME CATEGORIA</h1>               
                    </div>  
                </div>  
        </div>
    )
}
export default Categoria;