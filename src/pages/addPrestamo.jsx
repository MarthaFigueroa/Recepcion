import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../public/css/global.css';
import NavBar from './../components/NavBar.jsx'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosBaseURL } from "./../Config/axios.js"
// import * as Yup from 'yup';

// import { useRouter } from 'next/router'

// class addPrestamo extends React.Component {

const addPrestamo = () => {
    // const router = useRouter();


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


    return(
        <div>
            <NavBar />
            <div className="container d-flex font-poppins my-5">
                <div className="card container text-center px-0 py-0 my-5">
                    <div className="container text-center alertCont" key="alertCont">
                        {/*  style="border: none !important; box-shadow: none !important;" */}
                        <div className="row"> 
                            <div className="col-md-4 order-md-0 order-lg-0">
                                <div className="blue-div p-5 text-center h-100">
                                    <div className="py-5">
                                        <div className="imgcontainer mb-4 mx-auto text-center">
                                            <img width="auto" height="80" alt="UNIVERSIDAD EUROPEA DEL ATLÁNTICO" className="avatar mx-auto text-center"/>
                                            {/* src="../public/img/UNEAT_W.png" */}
                                        </div>
                                        <h2 className="color text-center mb-4 py-3">
                                            <span className="fa fa-sing-in"></span> Préstamo de Objetos Uneatlantico
                                        </h2>
                            
                                        <p className="text-center contentBar">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis debitis recusandae 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 mt-4 pb-3">
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
                                            <option value="30">Llave del Ascensor</option>
                                            <option value="60">Llave Aula 2.1</option>
                                            <option value="90">Llave Aula 2.2</option>
                                            <option value="120">Llave Aula 2.3</option>
                                        </select>
                                    </div>
                                    <div className="form-row form-fields">            
                                        <div className="">
                                            <input className="col-md-5" key="startDate" type="date" required/>
                                            <input className="col-md-5" key="startTime" type="time"/>
                                            <span className="validity"></span>
                                        </div>    
                                    </div>
                                    <div className="form-row form-fields">
                                        <input type="text" required key="reserva" placeholder="Asunto"/>
                                    </div>
                                    <div className="form-row form-fields">
                                        <input type="text"  key="descripcion" placeholder="Email" required readOnly/>  
                                    </div>
                                    <div className="form-row form-fields">
                                        <div>
                                            <select key="room" v-model="selected"> 
                                                <option value="80">Sala 1</option>
                                                <option value="81">Sala 2</option>
                                                <option value="82">Sala 3</option>
                                                <option value="83">Sala 4</option>
                                                <option value="84">Sala 5</option>
                                                <option value="85">Sala 6</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="btn btn-blue px-3" key="bot" onClick={handleRegisterSubmit}>Crear Préstamo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        
        </div>
        )
}

export default addPrestamo;