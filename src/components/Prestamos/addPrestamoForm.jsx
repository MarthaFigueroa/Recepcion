import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";

import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'

const AddPrestamoForm = () => {
    
    const history = useHistory();
    // let [objectName, setObjectSelected] = useState(dataPrestamo())
    const [users, setusers] = useState([]);
    const [objetos, setobjetos] = useState([]);
    
    // async function dataPrestamo() {
    //     const response = await axiosBaseURL.patch(`/list_prestamos`);
    //     return response.data.data[0];
    // }

    // eslint-disable-next-line
    useEffect(() => {
        async function fetchData() {
            let responseObjects = await axiosBaseURL.get('/list_objects');
            let objectsArr = [];
            // setobjects(() => responseObjects.data.data);
            responseObjects.data.data.map( (object) => {
                if(object.activo === 1){
                    objectsArr.push(object);
                    setobjetos(() => objectsArr);
                }else if(object.activo === 0){
                    console.log("GG");
                }
                return object;
            })
            let responseUsers = await axiosBaseURL.get('/list_users');
            let usersArr = [];
            // setusers(() => responseUsers.data.data);
            responseUsers.data.data.map( (user) => {
                if(user.habilitado === 1){
                    usersArr.push(user);
                    setusers(() => usersArr);
                }else if(user.habilitado === 0){
                    console.log("GG");
                }
                return user;
            })
            console.log("Yes", usersArr);
            console.log("Yes Cat", objectsArr);
        }
        fetchData();
    }, [])

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/add_prestamo", values);
        //setSubmitting(false);
        console.log(response.data.data);

        history.push('/prestamos');    
    }

    // async function onSelect(event) {
    //     const newValue = event.target.value;
    //     console.log("Value", newValue);
    //     const responseObjects = await axiosBaseURL.get(`/object_by_id/${newValue}`);
    //     console.log(responseObjects.data.data[0]);
    //     await setObjectSelected(responseObjects.data.data[0]);
    //     return objectName;
    // }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    nombres: "",
                    apellidos: "",
                    dni: "",
                    // id_objeto: objectName.objeto,
                    id_objeto: "",  //objectName.id
                    motivo: "",
                    tiempo_prestamo: "",
                    email: "",
                    usuario_creo: "",
                    firma: ""
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
            <Form className="form mx-5 px-5">
                <div className="form-row form-fields">
                    <label>Nombres y Apellidos: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                    <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
                </div>
                <div className="form-row form-fields">
                    <label>DNI: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="dni" key="dni" placeholder="DNI/NIE"required/>
                </div>
                <div className="form-row form-fields">
                    <label>Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field as="select" name="id_objeto" key="id_objeto"> 
                    {/*  value={objectName.id} */}
                        {
                            objetos.map( (objeto) => (
                                <option key={objeto.id} value={objeto.id}>{objeto.objeto}</option>
                            ))
                        }
                    </Field>
                </div>
                {/* <div className="form-row form-fields">
                    <Field type="text" name="id_objeto" key="id_objeto" value={prestamo.id_objeto} placeholder="Objeto"required/>
                </div> */}
                <div className="form-row form-fields">
                    <label>Descripción: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text"required name="motivo" key="motivo" placeholder="Descripción/Aula" />
                </div>
                <div className="form-row form-fields">
                    <label>Tiempo de Préstamo: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="number" name="tiempo_prestamo" key="tiempo_prestamo" min="1" placeholder="Tiempo de Préstamo" required/>
                </div>
                {/* <div className="form-row text-center form-fields">
                    <Field type="text"required name="tiempo_prestamo" key="tiempo_prestamo" placeholder="Tiempo Prestamo" />
                </div> */}
                <div className="form-row form-fields">
                    <label>Email: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="email" key="email" placeholder="Email" required/>  
                </div>
                <div className="form-row form-fields">
                    <label>Firma: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="firma" key="firma" cols="10" rows="2" placeholder="FIRMA"/>
                </div>
                <div className="form-row form-fields">
                    <label>Usuario que Creó: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field as="select" name="usuario_creo" key="usuario_creo"> 
                        {
                            users.map( (user) => (
                                <option key={user.id} value={user.id}>{user.usuario}</option>
                            ))
                        }
                    </Field>
                </div>
                <div className="form-row text-center form-fields">
                    <button className="btn btn-blue px-3" key="bot" disabled={isSubmitting}>Crear Préstamo</button>
                    <Link to="/prestamos" className="btn btn-blue px-3">Cancelar</Link>
                </div>
            </Form>
        )}
    </Formik>
    )
}

export default AddPrestamoForm;