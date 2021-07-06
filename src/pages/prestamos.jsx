import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../Config/axios.js';
import NavBar from '../components/NavBar.jsx'
import Table from '../components/Prestamos/prestamosTable.jsx'
import SideBar from '../components/sideBar.jsx'


const Principal = () =>{
    
    const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        response.data.data.map((prestamo) => {
            const arrFecha = prestamo.hora_prestamo.split("T");
            const arrHora = arrFecha[1].split(":");
            prestamo.hora_prestamo = arrFecha;
            prestamo.hora_prestamo[1] = arrHora[0]+":"+arrHora[1];
            // console.log("Array:", prestamo.hora_prestamo);
            return arrFecha;
        });
        setprestamos(() => response.data.data);
        console.log("Data:", response.data.data);
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