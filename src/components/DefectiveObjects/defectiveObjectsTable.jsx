import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import './../../public/css/global.css';
import { useState, useEffect, useRef } from "react";
import ObjetoPrestamo from './objetosPrestamo.jsx';
import { Link, useHistory } from 'react-router-dom'

const DefectiveObjectsTable = (props) => {

    const [objeto, setObjectSelected] = useState([])
    const history = useHistory();
    const ref = useRef();
    
    async function repair_obj(id, repaired){
        console.log(id);
        const values = {
            "reparado": repaired
        }
        let response = await axiosBaseURL.post(`/update_defective_object/${id}`, values);
        console.log("Heee: "+response);
        window.location.reload(false);
    }
    
    async function edit(defectives){
        console.log(defectives);
        console.log(defectives.id);
        history.push(`/editDefectuoso/${defectives.id}`);
    }

    async function deleteD(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_elimino": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_defective_object/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    // eslint-disable-next-line
    useEffect(async () => {
        // ref.current = props.objetos;
        console.log("Obj id:", props?.objetos);
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
                <h1>OBJETOS DEFECTUOSOS</h1>
                <Link className="button-AddPrestamo" to="/newDefectuoso"><b>+ Agregar Objeto Defectuoso</b></Link>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Objeto(s)</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Usuario Creo</th>
                            <th scope="col">Fecha Creación</th>
                            <th scope="col">Reparado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            console.log("Props", props.objetos)
                        }
                        {
                            props.defectives.map( (defective) => (
                                (defective.usuario_elimino === null || defective.usuario_elimino === "") ?
                                (defective.reparado === 0) ?
                                <tr key={defective.id}>
                                            <th scope="row">{defective.id}</th>
                                            {/* <td>{defective.id_objeto}</td> */}
                                            <td>{<ObjetoPrestamo objetos={defective.id_objeto}/>}</td>
                                            <td>{defective.motivo}</td>
                                            <td>{defective.cantidad}</td>
                                            <td>{defective.usuario_creo}</td>
                                            
                                            <td>{defective.fecha_creo[0]} {defective.fecha_creo[1]}</td>
                                            <td>{(defective.reparado === 1) ? "Reparado" : "Sin Reparar"}</td>
                                            <td>
                                                {<button className="btn btn-light return" key={defective.id} onClick={(e) => repair_obj(defective.id, 1, e)}>Reparado</button> }
                                                <button className="btn btn-light return" onClick={(e) => edit(defective, e)}>Editar</button>
                                                <button className="btn btn-light" onClick={(e) => deleteD(defective.id, "Carmen", e)}>Eliminar</button>
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

export default DefectiveObjectsTable