import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
// import { Select } from 'react-select';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory, useParams } from 'react-router-dom'

const EditPrestamo = () => {
    
    const { id } = useParams();
    const history = useHistory();
    const [prestamo, setprestamo] = useState(dataPrestamo())
    let [objectName, setObjectSelected] = useState([])
    const [users, setusers] = useState([]);
    const [objetos, setobjetos] = useState([]);

    // eslint-disable-next-line
    useEffect(async() => {
        let responseObjects = await axiosBaseURL.get('/list_objects');
        let objectsArr = [];
        // setobjects(() => responseObjects.data.data);
        responseObjects.data.data.map( (object) => {
            if(object.activo === 1){
                objectsArr.push(object);
                setobjetos(() => objectsArr);
            }else if(object.activo === 0){
                console.log("GG");
            }
            return object;
        })
        let responseUsers = await axiosBaseURL.get('/list_users');
        let usersArr = [];
        // setusers(() => responseUsers.data.data);
        responseUsers.data.data.map( (user) => {
            if(user.habilitado === 1){
                usersArr.push(user);
                setusers(() => usersArr);
            }else if(user.habilitado === 0){
                console.log("GG");
            }
            return user;
        })
        console.log("Yes", usersArr);
        console.log("Yes Cat", objectsArr);
    }, [])

    const handleRegisterSubmit = async (values, { setSubmitting }, event) => {
        console.log("Values: "+JSON.stringify(values));
        console.log("Tiempo de Préstamo", values.tiempo_prestamo);
        // console.log(objetos);
        
        // console.log(JSON.stringify(values));
        // console.log("Name",objectName);

        // const finalValueMandar = {...values , id_objeto: objetos.find(obj => ( 
        //     values.id_objeto == objectName
        // )).id}
        // console.log("Ayuda: "+JSON.stringify(finalValueMandar));

        const response = await axiosBaseURL.post(`/update_prestamo/${prestamo.id}`, values);
        console.log(response.data.data);

        history.push('/prestamos');
    }

    async function dataPrestamo() {
        const response = await axiosBaseURL.get(`/prestamo_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log(id);
        const response = await axiosBaseURL.get(`/prestamo_by_id/${id}`);
        setprestamo(response.data.data[0]);
        // console.log(response.data.data[0]);
        
        const responseObjects = await axiosBaseURL.get(`/object_by_id/${response.data.data[0].id_objeto}`);
        setObjectSelected(responseObjects.data.data[0]);
        console.log("kk:",responseObjects.data.data[0]);
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
                nombres: prestamo.nombres,
                apellidos: prestamo.apellidos,
                dni: prestamo.dni,
                devuelto: 0,
                // id_objeto: objectName.objeto,
                id_objeto: objectName.id,
                motivo: prestamo.motivo,
                tiempo_prestamo: prestamo.tiempo_prestamo,
                email: prestamo.email,
                usuario_modifico: (prestamo.usuario_modifico !== null) ? prestamo.usuario_modifico : "",
                firma: prestamo.firma
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
                        <label>Objeto: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field as="select" name="id_objeto" key="id_objeto" value={objectName.id} onChange = {onSelect}> 
                            {
                                objetos.map( (objeto) => (
                                    <option key={objeto.id} value={objeto.id}>{objeto.objeto}</option>
                                ))
                            }
                        </Field>
                    </div>
                    {/* <div className="form-row form-fields">
                        <Field type="text" name="id_objeto" key="id_objeto" value={prestamo.id_objeto} placeholder="Objeto"required/>
                    </div> */}
                    <div className="form-row form-fields">
                        <label>Descripción: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text"required name="motivo" key="motivo" placeholder="Descripción/Aula" />
                    </div>
                    <div className="form-row form-fields">
                        <label>Tiempo de Préstamo: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="number" name="tiempo_prestamo" key="tiempo_prestamo" min="1" placeholder="Tiempo de Préstamo" required/>
                    </div>
                    {/* <div className="form-row text-center form-fields">
                        <Field type="text"required name="tiempo_prestamo" key="tiempo_prestamo" placeholder="Tiempo Prestamo" />
                    </div> */}
                    <div className="form-row form-fields">
                        <label>Email: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="email" key="email" placeholder="Email" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <label>Usuario que Modificó: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field as="select" name="usuario_modifico" key="usuario_modifico"> 
                            {
                                users.map( (user) => (
                                    <option key={user.id} value={user.id}>{user.usuario}</option>
                                ))
                            }
                        </Field>
                    </div>
                    {/* <div className="form-row text-center form-fields">
                        <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modifico"required/>  
                    </div> */}
                    <div className="form-row form-fields">
                        <label>Firma: </label>
                    </div>
                    <div className="form-row text-center form-fields">
                        <Field type="text" name="firma" key="firma" cols="10" rows="2" placeholder="FIRMA"/>
                    </div>
                    <div className="form-row text-center form-fields">
                        <button className="btn btn-blue px-3" disabled={isSubmitting}>Editar Préstamo</button>
                        <Link to="/prestamos" className="btn btn-blue px-3">Cancelar</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default EditPrestamo;