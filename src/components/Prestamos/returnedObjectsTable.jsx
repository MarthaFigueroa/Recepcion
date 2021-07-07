import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
// import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
// import { useRouter } from 'next/router'
import './../../public/css/global.css';
import { Link, useHistory } from 'react-router-dom'


const PrestamosTable = (props) => {
    const history = useHistory();
    
    async function return_obj(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/return_object/${id}`);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }
    
    async function defective(prestamos){
        console.log(prestamos);
        console.log(prestamos.id);
        history.push(`/editPrestamo?id=${prestamos.id}`);
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
                <h1>PRÉSTAMOS</h1>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Fecha Préstamo</th>
                            <th scope="col">Devolución</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.prestamos.map( (prestamo) => (
                                
                                    (prestamo.hora_devolucion === null || prestamo.hora_devolucion === "") ?
                                    null:

                                    (prestamo.fecha_elimino === null || prestamo.fecha_elimino === "") ?
                                    <tr key={prestamo.id}>
                                        <th scope="row">{prestamo.id}</th>
                                        <td>{prestamo.nombres}</td>
                                        <td>{prestamo.apellidos}</td>
                                        <td>{prestamo.email}</td>
                                        <td>{prestamo.id_objeto}</td>
                                        <td>{prestamo.hora_prestamo[0]} {prestamo.hora_prestamo[1]}</td>
                                        <td>{(prestamo.devuelto === 1) ? "Devuelto" : "Sin Devolver"}</td>
                                        <td>
                                            <button className="btn btn-light return" onClick={(e) => defective(prestamo, e)}>Entrega Defectuosa</button>
                                            <button className="btn btn-light" onClick={(e) => deleteP(prestamo.id, "Carmen", e)}>Eliminar</button>
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

export default PrestamosTable