import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import { axiosBaseURL } from "./../../Config/axios.js"

const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/add_prestamo", values);
        //setSubmitting(false);
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid login")) window.alert(err.message);
            })
        }
        
        // router.push("/libros")

    }
const addPrestamoForm = () => (

    <form name="form1">
        <div className="form-row form-fields">
            <input className="col-md-5 dateInput" type="text" key="nombres" placeholder="Nombres" required/>
            <input className="col-md-5 dateInput" type="text" key="apellidos" placeholder="Apellidos" required/>
        </div>
        <div className="form-row form-fields">
            <input type="text" required key="dni" placeholder="DNI/NIE"/>
        </div>
        <div className="form-row form-fields">
            <select key="duration"> 
                <option>Llave del Ascensor</option>
                <option>Llave de Aulas</option>
                <option>Control de Proyector</option>
                <option>Ordenador</option>
            </select>
        </div>
        <div className="form-row form-fields">
            <input type="text" required key="reserva" placeholder="Descripción/Aula"/>
        </div>
        {/* <div className="form-row form-fields">
            <select key="duration"> 
                <option>Aula 1.1</option>
                <option>Aula 1.2</option>
                <option>Aula 1.3</option>
                <option>Aula 2.1</option>
                <option>Aula 2.2</option>
                <option>Aula 2.3</option>
            </select>
        </div> */}
        <div className="form-row form-fields">            
            <div className="">
                <input className="col-md-5" key="startDate" type="date" required/>
                <input className="col-md-5" key="startTime" type="time"/>
                <span className="validity"></span>
            </div>    
        </div>
        <div className="form-row form-fields">
            <input type="text" required key="asunto" placeholder="Asunto"/>
        </div>
        <div className="form-row form-fields">
            <input type="text"  key="email" placeholder="Email" required readOnly/>  
        </div>
        <div className="form-row form-fields">
            <textarea name="" key="firma" cols="10" rows="2" placeholder="FIRMA"></textarea>
        </div>
        <button className="btn btn-blue px-3" key="bot" onClick={handleRegisterSubmit}>Crear Préstamo</button>
    </form>
)

export default addPrestamoForm;