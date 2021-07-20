import React from 'react'
import SideBar from '../../components/sideBar'
import Tabs from '../../components/Categories/categoriesTabs.jsx'
import NavBar from '../../components/NavBar.jsx'

const Categoria = () =>{   

    return (
        <div>
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
export default Categoria;