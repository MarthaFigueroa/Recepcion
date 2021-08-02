import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import { Formik, Form, Field } from 'formik';
import { axiosBaseURL } from "../../Config/axios.js"
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'


const AddUserForm = () => {
    
    // let [roleName, setRoleSelected] = useState(dataRoles())
    const [roles, setRoles] = useState([]);
    const history = useHistory();

    // async function dataRoles() {
    //     const response = await axiosBaseURL.get(`/list_prestamos`);
    //     return response.data.data[0];
    // }

    // eslint-disable-next-line
    useEffect(async() => {
        let responseUsers = await axiosBaseURL.get('/list_roles');
        setRoles(() => responseUsers.data.data);
    }, [])

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values", JSON.stringify(values));
        console.log("Tiempo de Sesión", values.session_time+"h");
        values.session_time+="h";
        const response = await axiosBaseURL.post("/add_user", values);
        //setSubmitting(false);
        console.log(response.data.data);
        history.push('/usuario');
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    nombres: "",
                    apellidos: "",
                    email: "",
                    id_rol: "",
                    usuario: "",
                    usuario_creo: "",
                    session_time: "",
                    pswd: ""
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
                        <label>Rol: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field as="select" name="id_rol" key="id_rol">   
                        {/* roleName.id */}
                            {
                                roles.map( (role) => (
                                    <option key={role.id} value={role.id}>{role.rol}</option>
                                ))
                            }
                        </Field>
                    </div>
                    {/* <div className="form-row text-center form-fields">
                        <Field type="text" name="id_rol" key="id_rol" placeholder="Rol" required/>
                    </div> */}
                    <div className="form-row form-fields">
                        <label>Nombre de Usuario: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="usuario" key="usuario" placeholder="Usuario" required/>
                    </div>
                    <div className="form-row form-fields">
                        <label>Email: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="email" key="email" placeholder="Email" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <label>Contraseña: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="password" name="pswd" key="pswd" placeholder="Password" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <label>Tiempo de Sesión (horas): </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="number" name="session_time" key="session_time" min="1" placeholder="Tiempo de Sesión" required/>
                    </div>
                    <div className="form-row form-fields">
                        <label>Usuario que creó: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que lo creó" required/>  
                    </div>
                    <div className="form-row text-center form-fields">
                        <button className="btn btn-blue px-3" key="bot" disabled={isSubmitting}>Crear Usuario</button>
                        <Link to="/usuario" className="btn btn-blue px-3">Cancelar</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AddUserForm;