import React from 'react'
import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/sideBar.jsx'
import { axiosBaseURL } from '../../Config/axios';
import { useState, useEffect } from "react"
import MascarillasTable from '../../components/Mascarillas/mascarillasTable'
const Mascarillas = () =>{   
    const [mascarilla, setMascarilla] = useState([]);
   
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_masks');
        setMascarilla(() => response.data.data);
    }, [])
    return (
        <div>
            <NavBar />
            <div className="row">               
                    <div className="col-md-2">
                        <SideBar/>
                    </div>            
                    <div className=" col-md-10 container">
                        <MascarillasTable mascarilla={mascarilla}/>             
                    </div>  
                </div>  
        </div>
    )
}
export default Mascarillas;
