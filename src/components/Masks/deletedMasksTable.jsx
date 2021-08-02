import React from 'react';
import 'react-bootstrap';
import './../../public/css/global.css';
// import { Link } from 'react-router-dom'

const DeletedMasksTable = (props) => {

    return (
        <div>
            <div className="container">
                {/* <h1>Mascarillas</h1> */}
                <table className="table table-responsive text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Fecha</th>
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
                                        <td>{mask.usuario_creo}</td>
                                        <td>{mask.descripcion}</td>
                                        <td>{mask.tipo}</td>
                                        <td>{mask.cantidad}</td>
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