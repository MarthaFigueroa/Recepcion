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
    const { id } = useParams();
    const [usuario, setprestamo] = useState(dataPrestamo())

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

    async function dataPrestamo() {
        console.log(id);
        const response = await axiosBaseURL.get(`/user_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        console.log(id);

        const response = await axiosBaseURL.get(`/user_by_id/${id}`);
        setprestamo(response.data.data[0]);
        // console.log(response.data.data[0]);

        // const responseObjects = await axiosBaseURL.get(`/object_by_id/${response.data.data[0].id_objeto}`);
        // setObjectSelected(responseObjects.data.data[0]);
        // console.log("kk:",responseObjects.data.data[0]);
    }, [])
    
    // function onSelect(event) {
    //     // const selectedIndex = event.target.options.selectedIndex;
    //     const newValue = event.target.value;
    //     console.log("Value", newValue);
    //     setObjectSelected(objectName=newValue);
    //     console.log("Objs:", objectName);
    //     // console.log(event.target.options[selectedIndex].value);
    //     // return event.target.options[selectedIndex].value;
    //     return newValue;
    // }
    return(
        <Formik
            enableReinitialize="true"
            initialValues={{
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                usuario: usuario.usuario,
                id_rol: usuario.id_rol,
                email: usuario.email,
                usuario_modifico: usuario.usuario_modifico,
                session_time: usuario.session_time,
                pswd: usuario.pswd
            }}
            onSubmit={handleRegisterSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="mx-5 px-5">
                    <div className="form-row form-fields">
                        <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                        <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="id_rol" key="id_rol" placeholder="Rol" required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="usuario" key="usuario" placeholder="Usuario" required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="email" key="email" placeholder="Email" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="password" name="pswd" key="pswd" placeholder="Password" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modifico" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="session_time" key="session_time" placeholder="Tiempo de Sesión" required/>  
                    </div>
                    <button className="btn btn-blue px-3" disabled={isSubmitting}>Editar Préstamo</button>
                    <Link to="/usuario" className="btn btn-blue px-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;