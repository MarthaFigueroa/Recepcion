import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import RoleUser from './roleUser.jsx';
import { Link, useHistory } from 'react-router-dom'

const UsersTable = (props) => {

    // const [returned_obj, setreturned_obj] = useState([]);
    
    // const router = useRouter()

    const history = useHistory();

    async function deshabilitar(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/disable_user/${id}`);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }

    async function edit(usuarios){
        console.log(usuarios);
        console.log(usuarios.id);
        // const response = await axiosBaseURL.get(`/prestamo_by_id/${usuarios.id}`);
        // console.log(response.data.data);
        history.push(`/editUser/${usuarios.id}`);
    }

    async function deleteP(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_cerro": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_prestamo/${id}`, values);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }
    return (
        <div>
            <div className="container">
                <h1>USUARIOS</h1>
                <Link className="button-AddPrestamo" to="/newUser"><b>+ Agregar Usuario</b></Link>
                <table className="table table-responsive text-center">
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
                                
                                (usuario.habilitado === 1 && usuario.fecha_elimino === null) ?

                                <tr key={usuario.id}>
                                    <th scope="row">{usuario.id}</th>
                                    <td>{usuario.nombres}</td>
                                    <td>{usuario.apellidos}</td>
                                    <td>{usuario.email}</td>
                                    <td>{<RoleUser roles={usuario.id_rol}/>}</td>
                                    <td>{usuario.usuario}</td>
                                    {/* <td>{(usuario.habilitado === 1) ? "Devuelto" : "Sin Devolver"}</td> */}
                                    <td>
                                        <button className="btn btn-light return" key={usuario.id} onClick={(e) => deshabilitar(usuario.id, e)}>Deshabilitar</button> 
                                        <button className="btn btn-light return" onClick={(e) => edit(usuario, e)}>Editar</button>
                                        <button className="btn btn-light return" onClick={(e) => deleteP(usuario.id, "Carmen", e)}>Eliminar</button>
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