import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
// import { Link } from 'react-router-dom'

const DeletedMasksTable = (props) => {

    async function return_obj(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/return_object/${id}`);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(masks){
        console.log(masks);
        console.log(masks.id);
        window.location.href = `/editMask?id=${masks.id}`
    }

    return (
        <div>
            <div className="container">
                <h1>Mascarillas</h1>
                <table className="table table-responsive text-center">
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
                            props.mascarilla.map( (mascarilla) => (
                                <tr key={mascarilla.id}>
                                    <th scope="row">{mascarilla.id}</th>
                                    <td>{mascarilla.usuario_creo}</td>
                                    <td>{mascarilla.descripcion}</td>
                                    <td>{mascarilla.tipo}</td>
                                    <td>{mascarilla.cantidad}</td>
                                    <td>{mascarilla.fecha_creo.slice(0,10)} </td>
                                    {/* <td>
                                        <button className="btn btn-light return" key={mascarilla.id} onClick={(e) => return_obj(prestamo.id, e)}>Devolver</button> 
                                        <button className="btn btn-light" onClick={(e) => edit(prestamo, e)}>Editar</button>
                                    </td> */}
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