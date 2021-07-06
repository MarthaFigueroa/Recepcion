import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
// import { Select } from 'react-select';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'

const EditPrestamo = () => {
    
    const history = useHistory();
    const [prestamo, setprestamo] = useState(dataPrestamo())
    let [objectName, setObjectSelected] = useState([])
    const [objetos, setobjetos] = useState([]);

    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_objects');
        setobjetos(() => response.data.data);
    }, [])

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

        console.log(prestamo.id);
        const response = await axiosBaseURL.post(`/update_prestamo/${prestamo.id}`, values);
        console.log(response.data.data);

        history.push('/prestamos');

    }

    async function dataPrestamo() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        const response = await axiosBaseURL.get(`/prestamo_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        console.log(id);

        const response = await axiosBaseURL.get(`/prestamo_by_id/${id}`);
        setprestamo(response.data.data[0]);
        // console.log(response.data.data[0]);

        const responseObjects = await axiosBaseURL.get(`/object_by_id/${response.data.data[0].id_objeto}`);
        setObjectSelected(responseObjects.data.data[0]);
        console.log("kk:",responseObjects.data.data[0]);
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
                nombres: prestamo.nombres,
                apellidos: prestamo.apellidos,
                dni: prestamo.dni,
                // id_objeto: objectName.objeto,
                id_objeto: objectName.id,
                motivo: prestamo.motivo,
                tiempo_prestamo: prestamo.tiempo_prestamo,
                email: prestamo.email,
                usuario_modifico: prestamo.usuario_modifico,
                firma: prestamo.firma
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
                    <button className="btn btn-blue px-3" disabled={isSubmitting}>Editar Préstamo</button>
                    <Link to="/prestamos" className="btn btn-blue px-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;