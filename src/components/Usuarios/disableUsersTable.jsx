import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';

const UsersTable = (props) => {
    
    async function habilitar(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/enable_user/${id}`);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }
    
    async function deleteU(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_elimino": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_user/${id}`, values);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
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
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Nombre de Usuario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.usuarios.map( (usuario) => (
                                
                                    (usuario.habilitado === 0 && usuario.fecha_elimino ===null) ?
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.apellidos}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.id_rol}</td>
                                        <td>{usuario.usuario}</td>
                                        {/* <td>{(usuario.habilitado === 1) ? "Devuelto" : "Sin Devolver"}</td> */}
                                        <td>
                                            <button className="btn btn-light return" key={usuario.id} onClick={(e) => habilitar(usuario.id, e)}>Habilitar</button> 
                                            <button className="btn btn-light return" onClick={(e) => deleteU(usuario.id, "Flor", e)}>Eliminar</button>
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