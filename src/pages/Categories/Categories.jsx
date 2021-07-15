import React from 'react'
import SideBar from '../../components/sideBar'
import NavBar from '../../components/NavBar.jsx'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../../components/Categories/categoriesTable.jsx'

const Categoria = () =>{   

    const [categories, setcategories] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_categories');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        setcategories(() => response.data.data);
    }, [])

    return (
        <div>
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <h1 className="titleCategoria">CATEGORIA</h1>               
                        <Table categories={categories} />
                    </div>  
                </div>  
        </div>
    )
}
export default Categoria;