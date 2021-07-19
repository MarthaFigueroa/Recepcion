import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'

const AddPrestamoForm = () => {
    
    const history = useHistory();
    
    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/add_prestamo", values);
        //setSubmitting(false);
        console.log(response.data.data);

        history.push('/prestamos');    
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    cantidad: "",
                    tipo: "",
                    descripcion: "",
                    usuario_creo: ""
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
            <Form className="form mx-5 px-5">
                <div className="form-row form-fields">
                    <label>Cantidad de Mascarillas: </label>
                </div>
                <div className="form-row text-center form-fields maskInput">
                    <Field type="number" name="cantidad" key="cantidad" min="1" placeholder="Cantidad de Mascarillas" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Tipo de Mascarilla: </label>
                </div>
                <div className="form-row text-center form-fields maskInput">
                    <Field type="text" name="tipo" key="tipo" placeholder="Tipo de Mascarilla" required/>  
                </div>
                <div className="form-row form-fields">
                    <label>Descripción: </label>
                </div>
                <div className="form-row text-center form-fields maskInput">
                    <Field type="text" name="descripcion" key="descripcion" placeholder="Descripción" required/>  
                </div>
                <div className="form-row form-fields">
                    <label>Usuario que Creó: </label>
                </div>
                <div className="form-row text-center form-fields maskInput">
                    <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó" required/>  
                </div>
                <div className="form-row text-center form-fields">
                    <button className="btn btn-blue px-3" key="bot" disabled={isSubmitting}>Crear Mascarilla</button>
                    <Link to="/mascarilla" className="btn btn-blue px-3">Cancelar</Link>
                </div>
            </Form>
        )}
    </Formik>
    )
}

export default AddPrestamoForm;