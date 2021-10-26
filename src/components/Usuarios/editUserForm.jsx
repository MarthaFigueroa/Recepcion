import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
// import { Select } from 'react-select';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";

const EditPrestamo = () => {
    
    const history = useHistory();
    let [roleName, setRoleSelected] = useState(dataRoles())
    const [roles, setRoles] = useState([]);
    const { id } = useParams();
    const [usuario, setprestamo] = useState(dataPrestamo())

    // eslint-disable-next-line
    useEffect(async() => {
        let responseUsers = await axiosBaseURL.get('/list_roles');
        setRoles(() => responseUsers.data.data);
    })

    const handleRegisterSubmit = async (values, { setSubmitting }, event) => {
        console.log("Values: "+JSON.stringify(values));
        console.log("Values gg: "+values.id_objeto);
        // console.log(objetos);
        
        // console.log(JSON.stringify(values));
        // console.log("Name",objectName);

        // const finalValueMandar = {...values , id_objeto: objetos.find(obj => ( 
        //     values.id_objeto == objectName
        // )).id}
        // console.log("Ayuda: "+JSON.stringify(finalValueMandar));

        console.log(usuario.id);
        const response = await axiosBaseURL.post(`/update_user/${usuario.id}`, values);
        console.log(response.data.data);

        history.push('/usuario');
    }

    async function dataRoles() {
        const response = await axiosBaseURL.get(`/list_roles`);
        return response.data.data[0];
    }

    async function dataPrestamo() {
        const response = await axiosBaseURL.get(`/user_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        const response = await axiosBaseURL.get(`/user_by_id/${id}`);
        setprestamo(response.data.data[0]);
        // console.log(response.data.data[0]);

        const responseRoles = await axiosBaseURL.get(`/role_by_id/${response.data.data[0].id_rol}`);
        setRoleSelected(responseRoles.data.data[0]);
        console.log("kk:",responseRoles.data.data[0]);
    })
    
    async function onSelect(event) {
        const newValue = event.target.value;
        console.log("Value", newValue);
        const responseRoles = await axiosBaseURL.get(`/role_by_id/${newValue}`);
        console.log(responseRoles.data.data[0]);
        await setRoleSelected(responseRoles.data.data[0]);
        return roleName;
    }

    return(
        <Formik
            enableReinitialize="true"
            initialValues={{
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                usuario: usuario.usuario,
                id_rol: roleName.id,
                email: usuario.email,
                usuario_modifico: usuario.usuario_modifico,
                session_time: usuario.session_time,
                pswd: usuario.pswd
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
                        <Field as="select" name="id_rol" key="id_rol" value={roleName.id} onChange={onSelect}> 
                            {
                                roles.map( (role) => (
                                    <option key={role.id} value={role.id}>{role.rol}</option>
                                ))
                            }
                        </Field>
                    </div>
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
                        <label>Tiempo de Sesión: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="session_time" key="session_time" placeholder="Tiempo de Sesión" required/>  
                    </div>
                    <div className="form-row text-center form-fields">
                        <button className="btn btn-blue px-3" key="bot" disabled={isSubmitting}>Modificar Usuario</button>
                        <Link to="/usuario" className="btn btn-blue px-3">Cancelar</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;