import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';

const UsersTable = (props) => {
    
    async function habilitar(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/enable_object/${id}`);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }
    
    async function deleteO(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_elimino": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_object/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }
    return (
        <div>
            <div className="container">
                {/* <h1>USUARIOS DESHABILITADOS</h1> */}
                <table className="table table-responsive text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Importancia</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.objetos.map( (object) => (
                                (object.activo === 0 && object.fecha_elimino ===null) ?

                                <tr key={object.id}>
                                    <th scope="row">{object.id}</th>
                                    <td>{object.objeto}</td>
                                    <td>{object.descripcion}</td>
                                    <td>{object.cantidad}</td>
                                    <td>{object.id_importancia}</td>
                                    <td>{object.id_categoria}</td>
                                    <td>{object.fecha_creo[0]} {object.fecha_creo[1]}</td>
                                    <td>{(object.activo === 1) ? "Activo" : "Inactivo"}</td>
                                        <td>
                                            <button className="btn btn-light return" key={object.id} onClick={(e) => habilitar(object.id, e)}>Habilitar</button> 
                                            <button className="btn btn-light return" onClick={(e) => deleteO(object.id, "Flor", e)}>Eliminar</button>
                                        </td>
                                    </tr>
                                    :
                                    null
                            )
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersTable