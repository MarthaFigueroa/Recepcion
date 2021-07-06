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
            <Form className="mx-5 px-5">
                <div className="form-row form-fields">
                    <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                    <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
                </div>
                <div className="form-row form-fields">
                    <Field type="text" name="dni" key="dni" placeholder="DNI/NIE"required/>
                </div>
                {/* <div className="form-row form-fields">
                    <select name="id_objeto" key="id_objeto" onChange = {onSelect}> 
                        {
                            objetos.map( (objeto) => (
                            <option value={objeto.objeto}>{objeto.id}</option>))
                        }
                    </select>
                </div> */}
                <div className="form-row form-fields">
                    <Field type="text" name="id_objeto" key="id_objeto" placeholder="Objeto"required/>
                </div>
                <div className="form-row form-fields">
                    <Field type="text"required name="motivo" key="reserva" placeholder="Descripción/Aula" />
                </div>
                <div className="form-row form-fields">
                    <Field type="text"required name="tiempo_prestamo" key="tiempo_prestamo" placeholder="Tiempo Prestamo" />
                </div>
                <div className="form-row form-fields">
                    <Field type="text" name="email" key="email" placeholder="Email"required/>  
                </div>
                <div className="form-row form-fields">
                    <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modifico"required/>  
                </div>
                <div className="form-row form-fields">
                    <Field type="text" name="firma" key="firma" cols="10" rows="2" placeholder="FIRMA"/>
                </div>
                <button className="btn btn-blue px-3" key="bot" onClick={handleRegisterSubmit}>Crear Préstamo</button>
                <Link to="/prestamos" className="btn btn-blue px-3">Cancelar</Link>
            </Form>
        )}
    </Formik>
    )
}

export default AddPrestamoForm;