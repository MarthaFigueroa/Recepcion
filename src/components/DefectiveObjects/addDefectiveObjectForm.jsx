import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory, useParams } from 'react-router-dom'

const AddPrestamoForm = () => {
    
    const { id, id_object } = useParams();
    const history = useHistory();
    const [defectiveObj, setdefectiveObj] = useState(dataObject())

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log("Obj id:", id_object);
        // console.log(id);
        const id = id_object;
        const response = await axiosBaseURL.get(`/object_by_id/${id}`);
        setdefectiveObj(response.data.data[0]);
        // console.log(response.data.data[0]);
    }, [])
    
    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values:", values.id_objeto);
        // console.log("Prest id:", id);
        // console.log("Obj id:", id_object);

        const response = await axiosBaseURL.post("/add_defective_object", values);
        const responsePrestamo = await axiosBaseURL.post(`/return_object/${id}`, values);
        //setSubmitting(false);
        console.log(response.data.data);
        console.log(responsePrestamo.data.data);

        history.push('/prestamos');    
    }

    async function dataObject() {
        const response = await axiosBaseURL.get(`/object_by_id/${id}`);
        return response.data.data[0];
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    objeto: defectiveObj.objeto,
                    id_objeto: defectiveObj.id,
                    motivo: "",
                    cantidad: 1,
                    usuario_creo: ""
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
            <Form className="form mx-5 px-5">
                <div className="form-row form-fields">
                    <label>Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="objeto" key="objeto" placeholder="Objeto" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Id del Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="id_objeto" key="id_objeto" placeholder="Objeto" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Motivo de la Entrega Defectuosa: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="motivo" key="motivo" placeholder="Motivo/Defecto" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Cantidad de Objetos: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="cantidad" key="cantidad" placeholder="Cantidad de Objetos" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Usuario que Creó: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó" required/>  
                </div>
                <div className="form-row text-center form-fields">
                <button className="btn btn-blue px-3 mx-auto" key="bot" disabled={isSubmitting}>Agregar Objeto Defectuoso</button>
                <Link to="/prestamos" className="btn btn-blue px-3 mx-auto">Cancelar</Link>
                </div>
            </Form>
        )}
    </Formik>
    )
}

export default AddPrestamoForm;