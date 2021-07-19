import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'

const AddPrestamoForm = () => {
    
    const history = useHistory();
    
    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/add_given_mask", values);
        //setSubmitting(false);
        console.log(response.data.data);

        history.push('/mascarillasEntregadas');    
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    nombres: "",
                    apellidos: "",
                    dni: "",
                    id_mascarilla: "",
                    cantidad: "",
                    usuario_creo: ""
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
                        <label>Cantidad de Mascarillas a Entregar: </label>
                    </div>
                    <div className="form-row text-center form-fields maskInput">
                        <Field type="number" name="cantidad" key="cantidad" min="1" placeholder="Cantidad de Mascarillas" required/>
                    </div>
                    <div className="form-row form-fields">
                        <label>Id de Mascarilla: </label>
                    </div>
                    <div className="form-row text-center form-fields maskInput">
                        <Field type="text" name="id_mascarilla" key="id_mascarilla" placeholder="Id de Mascarilla" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <label>Usuario que Creó: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó" required/>  
                    </div>
                    <div className="form-row text-center form-fields">
                        <button className="btn btn-blue px-3" disabled={isSubmitting}>Entregar Mascarilla</button>
                        <Link to="/mascarillasEntregadas" className="btn btn-blue px-3">Cancelar</Link>
                    </div>
            </Form>
        )}
    </Formik>
    )
}

export default AddPrestamoForm;