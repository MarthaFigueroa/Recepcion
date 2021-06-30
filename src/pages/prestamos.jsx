import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../Config/axios.js';
import Table from '../components/tables/PrestamosTable.jsx'
import Cart from './../components/tables/cart.jsx'

const Principal = () =>{
    
    const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        setprestamos(() => response.data.data);
    }, [])

    return (
        
        <div className="col-md-10 container">
            <h1>HOLAAAAA</h1>
            <Table prestamos={prestamos}/>
            <Cart />
        </div>
    )
}

export default Principal;