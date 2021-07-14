import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory, useParams } from 'react-router-dom'

const EditPrestamoForm = () => {
    
    const { id, id_object } = useParams();
    let [objectName, setObjectSelected] = useState([])
    const history = useHistory();
    const [defectiveObj, setdefectiveObj] = useState(dataObject())

    async function dataObject() {
        console.log("gg",id);
        const response = await axiosBaseURL.get(`/defective_object_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log(id);
        const response = await axiosBaseURL.get(`/defective_object_by_id/${id}`);
        setdefectiveObj(response.data.data[0]);
        
        const responseObjects = await axiosBaseURL.get(`/object_by_id/${response.data.data[0].id_objeto}`);
        setObjectSelected(responseObjects.data.data[0]);
        console.log("kk:",responseObjects.data.data[0]);
    }, [])
    
    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        console.log("Values gg: "+values.cantidad);
        console.log(id);
        const response = await axiosBaseURL.post(`/update_defective_object/${id}`, values);
        console.log(response.data);

        history.push('/defectuosos');
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    id_objeto: defectiveObj.id_objeto,
                    motivo: defectiveObj.motivo,
                    reparado: 0,
                    cantidad:  defectiveObj.cantidad,
                    usuario_creo: defectiveObj.usuario_creo
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
            <Form className="form mx-5 px-5">
                <div className="form-row form-fields">
                    <label>Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="objeto" key="objeto" value={objectName.objeto} placeholder="Objeto" required/>
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
                    <Field type="number" name="cantidad" key="cantidad" placeholder="Cantidad de Objetos" min="1" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Usuario que Creó: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó" required/>  
                </div>
                <div className="form-row text-center form-fields">
                    <button className="btn btn-blue px-3 mx-auto" key="bot" disabled={isSubmitting}>Agregar Objeto Defectuoso</button>
                    <Link to="/defectuosos" className="btn btn-blue px-3 mx-auto">Cancelar</Link>
                </div>
            </Form>
        )}
    </Formik>
    )
}

export default EditPrestamoForm;