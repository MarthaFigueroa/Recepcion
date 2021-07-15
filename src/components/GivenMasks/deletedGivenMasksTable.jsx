import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import GivenMask from './givenMask.jsx';

// import { Link } from 'react-router-dom'

const DeletedMasksTable = (props) => {

    return (
        <div>
            <div className="container">
                <h1>Mascarillas</h1>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Mascarilla</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Usuario(s) que Eliminó</th>
                            <th scope="col">Fecha de Eliminación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log("kk: "+JSON.stringify(props.prestamos))
                            props.masks.map( (mask) => (
                                (mask.fecha_elimino === null || mask.fecha_elimino === "") ?
                                    null:
                                    <tr key={mask.id}>
                                        <th scope="row">{mask.id}</th>
                                        <td>{mask.nombres}</td>
                                        <td>{mask.apellidos}</td>
                                        <td>{mask.dni}</td>
                                        <td><GivenMask masks={mask.id_mascarilla}/></td>
                                        <td>{mask.cantidad}</td>
                                        <td>{mask.usuario_elimino}</td>
                                        <td>{mask.fecha_elimino[0]} {mask.fecha_elimino[1]} </td>
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

export default DeletedMasksTable