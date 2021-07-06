import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../Config/axios.js';
import NavBar from '../components/NavBar.jsx'
import Table from '../components/Usuarios/usersTable.jsx'
import SideBar from '../components/sideBar.jsx'

const Usuario = () =>{   

    const [usuarios, setusuarios] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_users');
        setusuarios(() => response.data.data);
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
                        <Table usuarios={usuarios} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Usuario;