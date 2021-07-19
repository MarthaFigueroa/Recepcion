import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import { Link, useHistory } from 'react-router-dom'

// import { Link } from 'react-router-dom'

const MascarillasTable = (props) => {

    const history = useHistory();

    async function deleteM(id, usr){
        console.log(id);
        const values = {
            "usuario_elimino": usr
        }
        
        let response = await axiosBaseURL.post(`/delete_mask/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(masks){
        console.log(masks);
        history.push(`/editMascarilla/${masks}`);
    }

    return (
        <div>
            <div className="container">
                <h1>Mascarillas</h1>
                <Link className="button-AddPrestamo" to="/newMascarilla"><b>+ Agregar Mascarilla</b></Link>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Usuario(s) que Creó</th>
                            <th scope="col">Fecha de Creación</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log("kk: "+JSON.stringify(props.prestamos))
                            props.masks.map( (mask) => (
                                (mask.fecha_elimino === null || mask.fecha_elimino === "") ?
                                <tr key={mask.id}>
                                    <th scope="row">{mask.id}</th>
                                    <td>{mask.descripcion}</td>
                                    <td>{mask.tipo}</td>
                                    <td>{mask.cantidad}</td>
                                    <td>{mask.usuario_creo}</td>
                                    <td>{mask.fecha_creo[0]} {mask.fecha_creo[1]} </td>
                                    <td>
                                        <button className="btn btn-light return" onClick={(e) => edit(mask.id, e)}>Editar</button>
                                        <button className="btn btn-light return" key={mask.id} onClick={(e) => deleteM(mask.id, "Carmen", e)}>Eliminar</button> 
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

export default MascarillasTable