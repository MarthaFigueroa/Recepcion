import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory, useParams } from 'react-router-dom'

const EditPrestamo = () => {
    
    const { id } = useParams();
    const history = useHistory();
    const [mask, setmasks] = useState(dataPrestamo())
    let [objectName, setObjectSelected] = useState([])
    const [objetos, setobj] = useState([]);

    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_masks');
        setobj(() => response.data.data);
    }, [])

    const handleRegisterSubmit = async (values, { setSubmitting }, event) => {
        console.log("Values: "+JSON.stringify(values));

        console.log(id);
        const response = await axiosBaseURL.post(`/update_prestamo/${id}`, values);
        console.log(response.data.data);

        history.push('/mascarilla');    

    }

    async function dataPrestamo() {
        console.log("gg",id);
        const response = await axiosBaseURL.get(`/mask_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log(id);
        const response = await axiosBaseURL.get(`/mask_by_id/${id}`);
        setmasks(response.data.data[0]);
        // console.log(response.data.data[0]);
        
        // const responseObjects = await axiosBaseURL.get(`/object_by_id/${response.data.data[0].id_objeto}`);
        // setObjectSelected(responseObjects.data.data[0]);
        // console.log("kk:",responseObjects.data.data[0]);
    }, [])
    
    async function onSelect(event) {
        const newValue = event.target.value;
        console.log("Value", newValue);
        const responseObjects = await axiosBaseURL.get(`/object_by_id/${newValue}`);
        console.log(responseObjects.data.data[0]);
        await setObjectSelected(responseObjects.data.data[0]);
        return objectName;
    }
    return(
        <Formik
            enableReinitialize="true"
            initialValues={{
                cantidad: mask.cantidad,
                tipo: mask.tipo,
                descripcion: mask.descripcion
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
                    <button className="btn btn-blue px-3" disabled={isSubmitting}>Editar Mascarilla</button>
                    <Link to="/mascarilla" className="btn btn-blue px-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;