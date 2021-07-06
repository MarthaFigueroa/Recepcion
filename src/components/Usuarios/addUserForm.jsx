import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import { Formik, Form, Field } from 'formik';
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'


const AddUserForm = () => {
    
    const history = useHistory();

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/add_user", values);
        //setSubmitting(false);
        console.log(response.data.data);

        history.push('/usuario');
        
        // router.push("/libros")

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
                    usuario_modifico: ""
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
        <Form name="form1">
            <div className="form-row form-fields">
                <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
            </div>
            <div className="form-row form-fields">
                <Field type="text"required name="id_rol" key="id_rol" placeholder="Rol" />
            </div>
            <div className="form-row form-fields">
                <Field type="text"required name="usuario" key="usuario" placeholder="Usuario" />
            </div>
            <div className="form-row form-fields">
                <Field type="text" name="email" key="email" placeholder="Email"required/>  
            </div>
            <div className="form-row form-fields">
                <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modifico"required/>  
            </div>
            <button className="btn btn-blue px-3" key="bot" onClick={handleRegisterSubmit}>Crear Préstamo</button>
            <Link to="/usuario" className="btn btn-blue px-3">Cancelar</Link>
            </Form>
                )}
        </Formik>
    )
    }

export default AddUserForm;