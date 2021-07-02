import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link } from 'react-router-dom'

const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/update_prestamo", values);
        
        console.log(response.data.data);
        
        // router.push("/libros")

    }
const EditPrestamo = () => {

    const [prestamo, setprestamo] = useState([])
    // eslint-disable-next-line
    useEffect(async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        console.log(id);

        // const response = await axiosBaseURL.get(`/prestamo_by_id/${id}`);
        // setprestamo(response.data.data);
        // console.log(response.data.data);
        
        // console.log("Libro: "+ prestamo);
    }, [])

    return(
        <form name="form1">
            <div className="form-row form-fields">
                <input className="col-md-5 dateInput" type="text" key="nombres" placeholder="Nombres" value={prestamo.nombres} required/>
                <input className="col-md-5 dateInput" type="text" key="apellidos" placeholder="Apellidos" value={prestamo.apellidos} required/>
            </div>
            <div className="form-row form-fields">
                <input type="text" required key="dni" placeholder="DNI/NIE" value={prestamo.dni}/>
            </div>
            <div className="form-row form-fields">
                <select key="object" value={prestamo.id_objeto}> 
                    <option>Llave del Ascensor</option>
                    <option>Llave de Aulas</option>
                    <option>Control de Proyector</option>
                    <option>Ordenador</option>
                </select>
            </div>
            <div className="form-row form-fields">
                <input type="text" required key="reserva" placeholder="Descripción/Aula" value={prestamo.descripcion} />
            </div>
            <div className="form-row form-fields">            
                <div className="">
                    <input className="col-md-5" key="startDate" type="date" required/>
                    <input className="col-md-5" key="startTime" type="time"/>
                    <span className="validity"></span>
                </div>    
            </div>
            <div className="form-row form-fields">
                <input type="text" required key="devuelto" placeholder="Devuelto?"  value={prestamo.devuelto}/>
            </div>
            <div className="form-row form-fields">
                <input type="text"  key="email" placeholder="Email"  value={prestamo.email} required/>  
            </div>
            <div className="form-row form-fields">
                <textarea name="" key="firma" cols="10" rows="2" placeholder="FIRMA" value={prestamo.firma}></textarea>
            </div>
            <button className="btn btn-blue px-3" key="bot">Editar Préstamo</button>
            <Link to="/prestamos" className="btn btn-blue px-3">Cancelar</Link>
        </form>
    )
}

export default EditPrestamo;