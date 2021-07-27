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


const CategoriesTable = (props) => {

    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const closeEditModal = () => setShow2(false);
    const [categories, setCategorie] = useState([]);

    async function disable_categ(id, activo){
        console.log(id);
        const values = {
            "activo": activo
        }
        let response = await axiosBaseURL.post(`/update_categorie/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(categorie){
        console.log(categorie);
        const response = await axiosBaseURL.get(`/categorie_by_id/${categorie.id}`);
        setCategorie(() => response.data.data[0]);
        setShow2(true);
    }

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        const response = await axiosBaseURL.post(`/add_categorie`, values);

        window.location.reload(false);
    }

    const handleEditCategorie = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        const newValues = {
            categoria: values.categoria,
            usuario_modifico: values.usuario_modifico,
            activo: 1
        }
        const response = await axiosBaseURL.post(`/update_categorie/${values.id}`, newValues);
        console.log(response.data);

        window.location.reload(false);
    }

    return(
        <div>
            <div className="container">
                <h1>Categorías</h1>
                {/* <Link className="button-AddPrestamo" to=""><b>+ Agregar Categoria</b></Link> */}
                <Button className="button-AddPrestamo" variant="primary" onClick={handleShow}>
                    <b>+ Agregar Categoria</b>
                </Button>

                

                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header >
                    <Modal.Title>Agregar Categoría</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Formik
                        enableReinitialize="true"
                        initialValues={{
                            categoria: "",
                            usuario_creo: ""
                        }}
                        onSubmit={handleRegisterSubmit}
                    >
                    {({ isSubmitting }) => (
                    <Form className="form mx-5 px-5">
                        <div className="form-row form-fields">
                            <label>Nombre de la categoria</label>
                        </div> 
                        <div className="form-row text-center form-fields">
                            <Field type="text" name="categoria" key="categoria" placeholder="Nombre de la categoria" className="form-control" id="categorie" />
                        </div>
                        <div className="form-row form-fields">
                            <label>Usuario que Creó: </label>
                        </div>
                        <div className="form-row text-center form-fields">
                            <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que Creó"/>  
                        </div>
                        <div className="form-row text-center form-fields">
                            <button className="btn btn-primary" disabled={isSubmitting}>
                                Crear Categoría
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
                <Modal show={show2} onHide={closeEditModal} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header >
                    <Modal.Title>Editar Categoría</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Formik
                        enableReinitialize="true"
                        initialValues={{
                            id: categories.id,
                            categoria: categories.categoria,
                            usuario_modifico: categories.usuario_modifico
                        }}
                        onSubmit={handleEditCategorie}
                    >
                    {({ isSubmitting }) => (
                    <Form className="form mx-5 px-5">
                        <div className="form-row form-fields">
                            <label>Nombre de la categoria</label>
                        </div> 
                        <div className="form-row text-center form-fields">
                            <Field type="text" name="categoria" key="categoria" placeholder="Nombre de la categoria" className="form-control" id="categorie" />
                        </div>
                        <div className="form-row form-fields">
                            <label>Usuario que Modificó: </label>
                        </div>
                        <div className="form-row text-center form-fields">
                            <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modificó"/>  
                        </div>
                        <div className="form-row text-center form-fields">
                            <button className="btn btn-primary" disabled={isSubmitting}>
                                Modificar Categoría
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
                            <th scope="col">Categoría</th>
                            <th scope="col">Creado por</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.categories.map( (categorie) => (
                            (categorie.activo === 1) ?
                                <tr key={categorie.id}>
                                    <th scope="row">{categorie.id}</th>
                                    <td>{categorie.categoria}</td>
                                    <td>{categorie.usuario_creo}</td>
                                    <td>{categorie.fecha_creo[0]} {categorie.fecha_creo[1]}</td>
                                    <td>{(categorie.activo === 1) ? "Activo" : "Inactivo"}</td>
                                    <td>
                                        <button className="btn btn-light return" key={categorie.id} onClick={(e) => disable_categ(categorie.id, 0, e)}>Deshabilitar</button> 
                                        {/* <button className="btn btn-light return" onClick={(e) => edit(categorie, e)}>Editar</button> */}
                                        <Button className="btn btn-light return" variant="primary" onClick={(e) => edit(categorie, e)}>Editar</Button>
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

export default CategoriesTable