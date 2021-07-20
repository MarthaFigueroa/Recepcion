import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { axiosBaseURL } from '../../Config/axios.js';
import { Link, useHistory } from 'react-router-dom'
import ImportanceObject from './importanceObject.jsx';
import CategorieObject from './categorieObject.jsx';


const ObjectsTable = (props) => {

    const history = useHistory();

    async function disable_obj(id, activo){
        console.log(id);
        const values = {
            "activo": activo
        }
        let response = await axiosBaseURL.post(`/update_object/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(objects){
        console.log(objects);
        // const response = await axiosBaseURL.get(`/object_by_id/${objects.id}`);
        // console.log(response.data.data);
        history.push(`/editObjeto/${objects.id}`);
    }

    return(
        <div>
            <div className="container">
                <h1>Inventario</h1>
                <Link className="button-AddPrestamo" to="/newObjeto"><b>+ Agregar Objeto</b></Link>
                <table className="table table-responsive text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Importancia</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.objetos.map( (object) => (
                            (object.activo === 1) ?
                            <tr key={object.id}>
                                <th scope="row">{object.id}</th>
                                <td>{object.objeto}</td>
                                <td>{object.descripcion}</td>
                                <td>{object.cantidad}</td>
                                {/* <td>{object.id_importancia}</td> */}
                                <td><ImportanceObject objetos={object.id_importancia}/></td>
                                <td><CategorieObject objetos={object.id_categoria}/></td>
                                {/* <td>{object.id_categoria}</td> */}
                                <td>{object.fecha_creo[0]} {object.fecha_creo[1]}</td>
                                <td>{(object.activo === 1) ? "Activo" : "Inactivo"}</td>
                                <td>
                                    <button className="btn btn-light return" key={object.id} onClick={(e) => disable_obj(object.id, 0, e)}>Desactivar</button> 
                                    <button className="btn btn-light return" onClick={(e) => edit(object, e)}>Editar</button>
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

export default ObjectsTable