import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { Link } from 'react-router-dom'
import { axiosBaseURL } from '../../Config/axios.js';

const categoriesTable = (props) => {

    async function enable_categ(id){
        console.log(id);
        let response = await axiosBaseURL.post(`/enable_categorie/${id}`);
        console.log("Heee: "+response.data.data);
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
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Creado por</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.categories.map( (categorie) => (
                            (categorie.activo === 0 && categorie.fecha_elimino === null) ?
                                <tr key={categorie.id}>
                                    <th scope="row">{categorie.id}</th>
                                    <td>{categorie.categoria}</td>
                                    <td>{categorie.usuario_creo}</td>
                                    <td>{categorie.fecha_creo[0]} {categorie.fecha_creo[1]}</td>
                                    <td>{(categorie.activo === 1) ? "Activo" : "Inactivo"}</td>
                                    <td>
                                        <button className="btn btn-light return" key={categorie.id} onClick={(e) => enable_categ(categorie.id, e)}>Habilitar</button> 
                                        <button className="btn btn-light return" onClick={(e) => edit(categorie, e)}>Editar</button>
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

export default categoriesTable