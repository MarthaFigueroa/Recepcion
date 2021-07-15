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
        const response = await axiosBaseURL.post(`/update_given_mask/${id}`, values);
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
                nombres: mask.nombres,
                apellidos: mask.apellidos,
                dni: mask.dni,
                id_mascarilla: mask.id_mascarilla,
                cantidad: mask.cantidad
            }}
            onSubmit={handleRegisterSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="form mx-5 px-5">
                    <div className="form-row form-fields">
                        <label>Nombres y Apellidos: </label>
                    </div>
                    <div className="form-row form-fields">
                        <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                        <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
                    </div>
                    <div className="form-row form-fields">
                        <label>DNI: </label>
                    </div>
                    <div className="form-row form-fields">
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
                    <div className="form-row text-center form-fields">
                        <button className="btn btn-blue px-3" disabled={isSubmitting}>Editar Mascarilla Entregada</button>
                        <Link to="/mascarillasEntregadas" className="btn btn-blue px-3">Cancelar</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;