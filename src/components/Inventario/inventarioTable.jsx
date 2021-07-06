import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { Link } from 'react-router-dom'
import { axiosBaseURL } from '../../Config/axios.js';

const inventarioTable = (props) => {

    async function activate_obj(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/return_object/${id}`);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }

    async function edit(prestamos){
        console.log(prestamos);
        const response = await axiosBaseURL.get(`/prestamo_by_id/${prestamos.id}`);
        console.log(response.data.data);
    }

    return(
        <div>
            <div className="container">
                <h1>Inventario</h1>
                <Link className="button-AddPrestamo" to=""><b>+ Agregar Material</b></Link>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.objects.map( (object) => (
                            <tr key={object.id}>
                                <th scope="row">{object.id}</th>
                                <td>{object.objeto}</td>
                                <td>{object.descripcion}</td>
                                <td>{object.cantidad}</td>
                                <td>{object.fecha_creo}</td>
                                <td>{(object.activo === 1) ? "Activo" : "Inactivo"}</td>
                                <td>
                                    <button className="btn btn-light return" key={object.id} onClick={(e) => activate_obj(object.id, e)}>Deshabilitar</button> 
                                    <button className="btn btn-light" onClick={(e) => edit(object, e)}>Editar</button>
                                </td>
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

export default inventarioTable