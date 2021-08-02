import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'

const AddPrestamoForm = () => {
    
    const history = useHistory();
    // let [maskName, setMaskSelected] = useState([])
    const [masks, setmasks] = useState([]);
    
    // eslint-disable-next-line
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get('/list_masks');
            setmasks(() => response.data.data);
        }
        fetchData();
    }, [])

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
                    id_mascarilla: "",  //maskName.id
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
                        <label>Tipo de Mascarilla: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field as="select" name="id_mascarilla" key="id_mascarilla"> 
                        {/*   value={maskName.id} */}
                            {
                                masks.map( (mask) => (
                                    <option key={mask.id} value={mask.id}>{mask.tipo}</option>
                                ))
                            }
                        </Field>
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