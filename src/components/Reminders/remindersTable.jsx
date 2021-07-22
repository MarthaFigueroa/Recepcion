import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { axiosBaseURL } from '../../Config/axios.js';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import { Formik, Form, Field } from 'formik';


const RemindersTable = (props) => {

    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const closeEditModal = () => setShow2(false);
    const [reminders, setReminder] = useState([]);

    async function complete_reminder(id, completado){
        console.log(id);
        const values = {
            "completado": completado
        }
        let response = await axiosBaseURL.post(`/update_reminder/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(reminder){
        console.log(reminder);
        const response = await axiosBaseURL.get(`/reminder_by_id/${reminder.id}`);
        setReminder(() => response.data.data[0]);
        setShow2(true);
    }

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        const response = await axiosBaseURL.post(`/add_reminder`, values);

        window.location.reload(false);
    }

    const handleEditReminder = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        const newValues = {
            titulo: values.titulo,
            descripcion: values.descripcion,
            usuario_modifico: values.usuario_modifico,
            completado: 0
        }
        console.log("New Values", newValues);
        const response = await axiosBaseURL.post(`/update_reminder/${values.id}`, newValues);
        console.log(response.data);

        window.location.reload(false);
    }

    return(
        <div>
            <div className="container">
                <h1>Recordatorios</h1>
                <Button className="button-AddPrestamo" variant="primary" onClick={handleShow}>
                    <b>+ Agregar Recordatorio</b>
                </Button>

                
                {/* Add Reminder Modal */}
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header >
                        <Modal.Title>Agregar Recordatorio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            enableReinitialize="true"
                            initialValues={{
                                titulo: "",
                                descripcion: "",
                                usuario_creo: ""
                            }}
                            onSubmit={handleRegisterSubmit}
                        >
                        {({ isSubmitting }) => (
                        <Form className="form mx-5 px-5">
                            <div className="form-row form-fields">
                                <label>Título del Recordatorio</label>
                            </div> 
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="titulo" key="titulo" placeholder="Título del Recordatorio" className="form-control" id="reminder" />
                            </div>
                            <div className="form-row form-fields">
                                <label>Descripción del Recordatorio</label>
                            </div> 
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="descripcion" key="descripcion" placeholder="Descripción del Recordatorio" className="form-control" id="reminder" />
                            </div>
                            <div className="form-row form-fields">
                                <label>Usuario que Creó: </label>
                            </div>
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó"/>  
                            </div>
                            <div className="form-row text-center form-fields">
                                <button className="btn btn-primary" disabled={isSubmitting}>
                                    Crear Recordatorio
                                </button>
                                {/* <button className="btn btn-secondary" onClick={handleClose}>
                                    Cancelar
                                </button> */}
                            </div>

                        </Form>
                        )}
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="form-row text-center form-fields">
                            {/* <button className="btn btn-primary" disabled={isSubmitting}>
                                Crear Categoría
                            </button> */}
                            <button className="btn btn-secondary" onClick={handleClose}>
                                Cancelar
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                
                {/* Edit Reminder Modal */}
                <Modal show={show2} onHide={closeEditModal} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header >
                        <Modal.Title>Editar Recordatorio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            enableReinitialize="true"
                            initialValues={{
                                id: reminders.id,
                                titulo: reminders.titulo,
                                descripcion: reminders.descripcion,
                                usuario_modifico: reminders.usuario_modifico
                            }}
                            onSubmit={handleEditReminder}
                        >
                        {({ isSubmitting }) => (
                        <Form className="form mx-5 px-5">
                            <div className="form-row form-fields">
                                <label>Título del Recordatorio</label>
                            </div> 
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="titulo" key="titulo" placeholder="Título del Recordatorio" className="form-control"/>
                            </div>
                            <div className="form-row form-fields">
                                <label>Descripción del Recordatorio</label>
                            </div> 
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="descripcion" key="descripcion" placeholder="Descripción del Recordatorio" className="form-control"/>
                            </div>
                            <div className="form-row form-fields">
                                <label>Usuario que Modificó: </label>
                            </div>
                            <div className="form-row text-center form-fields">
                                <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modificó"/>  
                            </div>
                            <div className="form-row text-center form-fields">
                                <button className="btn btn-primary" disabled={isSubmitting}>
                                    Modificar Recordatorio
                                </button>
                                {/* <button className="btn btn-secondary" onClick={handleClose}>
                                    Cancelar
                                </button> */}
                            </div>

                        </Form>
                        )}
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="form-row text-center form-fields">
                            {/* <button className="btn btn-primary" disabled={isSubmitting}>
                                Crear Categoría
                            </button> */}
                            <button className="btn btn-secondary" onClick={closeEditModal}>
                                Cancelar
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Recordatorio</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Creado por</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.reminders.map( (reminder) => (
                            (reminder.completado === 0) ?
                                <tr key={reminder.id}>
                                    <th scope="row">{reminder.id}</th>
                                    <td>{reminder.titulo}</td>
                                    <td>{reminder.descripcion}</td>
                                    <td>{reminder.usuario_creo}</td>
                                    <td>{reminder.fecha_creo[0]} {reminder.fecha_creo[1]}</td>
                                    <td>{(reminder.completado === 1) ? "Completado" : "Sin Completar"}</td>
                                    <td>
                                        <button className="btn btn-light return" key={reminder.id} onClick={(e) => complete_reminder(reminder.id, 1, e)}>Completar</button> 
                                        {/* <button className="btn btn-light return" onClick={(e) => edit(reminder, e)}>Editar</button> */}
                                        <Button className="btn btn-light return" variant="primary" onClick={(e) => edit(reminder, e)}>Editar</Button>
                                    </td>
                                </tr>
                                :null
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RemindersTable