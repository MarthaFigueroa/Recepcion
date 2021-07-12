import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom'


const PrestamosTable = (props) => {

    const [objeto, setObjectSelected] = useState([])
    const history = useHistory();
    const ref = useRef();
    
    async function return_obj(id, defective, usr){
        console.log(id);
        const values = {
            "entrega_defectuosa": defective,
            "usuario_cerro" : usr
        }
        let response = await axiosBaseURL.post(`/return_object/${id}`, values);
        console.log("Heee: "+response);
        window.location.reload(false);
    }
    
    async function edit(prestamos){
        console.log(prestamos);
        console.log(prestamos.id);
        history.push(`/editPrestamo/${prestamos.id}`);
    }

    async function deleteP(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_cerro": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_prestamo/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    // eslint-disable-next-line
    useEffect(async () => {
        ref.current = props.objetos;
        console.log("Obj id:", props.objetos);
        // const response = await axiosBaseURL.get(`/object_by_id/${id}`);
        // setdefectiveObj(response.data.data[0]);
        // console.log(response.data.data[0]);
    }, [])

    async function objectName (id){
        console.log("ID:",id);
        console.log("ID:",id);
        const responseObjects = await axiosBaseURL.get(`/object_by_id/${id}`);
        setObjectSelected(responseObjects.data.data[0].objeto);
        console.log("kk:",responseObjects.data.data[0].objeto);
    }

    return (
        <div>
            <div className="container">
                <h1>PRÉSTAMOS</h1>
                <Link className="button-AddPrestamo" to="/newPrestamo"><b>+ Agregar Préstamo</b></Link>
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
                            console.log("Props", props.objetos)
                        }
                        {
                            props.prestamos.map( (prestamo) => (
                                (prestamo.usuario_cerro === null || prestamo.usuario_cerro === "") ?
                                (prestamo.devuelto === 0) ?
                                <tr key={prestamo.id}>
                                            <th scope="row">{prestamo.id}</th>
                                            <td>{prestamo.nombres}</td>
                                            <td>{prestamo.apellidos}</td>
                                            <td>{prestamo.email}</td>
                                            <td>{prestamo.id_objeto}</td>
                                            {/* <td>{props.objetos[1]}</td> */}
                                            {
                                                // props.objetos.map( (objeto) => ( 
                                                //     <td key={objeto} id={objeto}>{objeto}</td>
                                                // ))
                                            }
                                            
                                            <td>{prestamo.hora_prestamo[0]} {prestamo.hora_prestamo[1]}</td>
                                            <td>{(prestamo.devuelto === 1) ? "Devuelto" : "Sin Devolver"}</td>
                                            <td>
                                                {(prestamo.devuelto === 1) ? <button className="btn btn-light return" key={prestamo.id} onClick={(e) => return_obj(prestamo.id, e)} disabled>Devolver</button> 
                                                : <button className="btn btn-light return" key={prestamo.id} onClick={(e) => return_obj(prestamo.id, 0, "Carl", e)}>Devolver</button> }
                                                <button className="btn btn-light return" onClick={(e) => edit(prestamo, e)}>Editar</button>
                                                <button className="btn btn-light" onClick={(e) => deleteP(prestamo.id, "Carmen", e)}>Eliminar</button>
                                            </td>
                                        </tr>
                                        :null
                                    :null
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PrestamosTable