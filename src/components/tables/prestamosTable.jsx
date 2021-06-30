import React from 'react';
// import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router'
import './../../public/css/global.css';

const PrestamosTable = (props) => {

    // const [returned_obj, setreturned_obj] = useState([]);
    
    const router = useRouter()

    async function return_obj(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/return_object/${id}`);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }

    async function edit(books){
        console.log(books);
        const response = await axiosBaseURL.get(`/object_by_id/${books.ID}`);
    }

    return (
        <div>
            <div className="container">
                <table className="table text-center">
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
                            // console.log("kk: "+JSON.stringify(props.prestamos))
                            props.prestamos.map( (prestamo) => (
                                <tr key={prestamo.id}>
                                    <th scope="row">{prestamo.id}</th>
                                    <td>{prestamo.nombres}</td>
                                    <td>{prestamo.apellidos}</td>
                                    <td>{prestamo.email}</td>
                                    <td>{prestamo.id_objeto}</td>
                                    <td>{prestamo.hora_prestamo}</td>
                                    <td>{(prestamo.devuelto === 1) ? "Devuelto" : "Sin Devolver"}</td>
                                    <td><button className="btn btn-light" key={prestamo.id} onClick={(e) => return_obj(prestamo.id, e)}>Devolver</button> <button className="btn btn-light">Editar</button></td>
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

export default PrestamosTable