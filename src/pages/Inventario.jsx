import React from 'react'
import SideBar from './../components/sideBar'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../Config/axios.js';
import Table from './../components/Inventario/inventarioTable'
import NavBar from './../components/NavBar.jsx'

const Inventario = () =>{   

    const [objects, setobjects] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_objects');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        setobjects(() => response.data.data);
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
                        <Table objects={objects} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inventario;