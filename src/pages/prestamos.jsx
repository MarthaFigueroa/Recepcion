import React from 'react'
// import { useState, useEffect } from "react";
// import { axiosBaseURL } from '../Config/axios.js';
import Table from './../components/tables/prestamosTable.jsx'

const Principal = () =>{
    
    // const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    // useEffect(async() => {
    //         let res = await fetch('http://localhost:4000/v1/api/list_prestamos')
    //         let data = await res.json();
    //         console.log("GG: "+ JSON.stringify(data.data[0]));
    //         setprestamos(data.data);
    //         return {data}
    // }, [])

    async function fetchData(){
        let res = await fetch('http://localhost:4000/v1/api/list_prestamos')
        let data = await res.json();
        console.log("GG: "+ data.data);
        // setprestamos(data.data);
        return data.data
    }

    return (
        
        <div className="col-md-10 container">
            <h1>HOLAAAAA</h1>
            <Table prestamos={fetchData()}/>
        </div>
    )
}

export default Principal;