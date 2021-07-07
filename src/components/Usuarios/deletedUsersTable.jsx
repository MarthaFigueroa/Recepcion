import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import { Link } from 'react-router-dom'

const UsersTable = (props) => {

    // const [returned_obj, setreturned_obj] = useState([]);
    
    // const router = useRouter()
        
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
                <h1>USUARIOS ELIMINADOS</h1>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Nombre de Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.usuarios.map( (usuario) => (
                                
                                    (usuario.fecha_elimino === null || usuario.fecha_elimino === "") ?
                                    null:
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.apellidos}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.id_rol}</td>
                                        <td>{usuario.usuario}</td>
                                        {/* <td>{(usuario.habilitado === 1) ? "Devuelto" : "Sin Devolver"}</td> */}
                                    </tr>
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