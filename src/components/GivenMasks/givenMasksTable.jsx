import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import { Link, useHistory } from 'react-router-dom'
import GivenMask from './givenMask.jsx';

// import { Link } from 'react-router-dom'

const MascarillasTable = (props) => {

    const history = useHistory();

    async function deleteM(id, usr){
        console.log(id);
        const values = {
            "usuario_elimino": usr
        }
        
        let response = await axiosBaseURL.post(`/delete_given_mask/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(masks){
        console.log(masks);
        history.push(`/editMascarillaEntregada/${masks}`);
    }

    return (
        <div>
            <div className="container">
                <Link className="button-AddPrestamo" to="/newMascarillaEntregada"><b>+ Entregar Nueva Mascarilla</b></Link>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Mascarilla</th>
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
                                    <td>{mask.nombres}</td>
                                    <td>{mask.apellidos}</td>
                                    <td>{mask.dni}</td>
                                    {/* <td>{mask.id_mascarilla}</td> */}
                                    <td><GivenMask masks={mask.id_mascarilla}/></td>
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