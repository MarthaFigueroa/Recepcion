import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../Config/axios.js';
import NavBar from './../components/NavBar.jsx'
import Table from '../components/Prestamos/PrestamosTable.jsx'
import SideBar from './../components/sideBar.jsx'


const Principal = () =>{
    
    const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        setprestamos(() => response.data.data);
    }, [])

    return (
        <div>
            <NavBar />
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 container">
                        <Table prestamos={prestamos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;