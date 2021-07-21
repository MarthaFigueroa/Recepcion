import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { Link } from 'react-router-dom'
import { axiosBaseURL } from '../../Config/axios.js';

const categoriesTable = (props) => {

    async function disable_categ(id, activo){
        console.log(id);
        const values = {
            "activo": activo
        }
        let response = await axiosBaseURL.post(`/update_categorie/${id}`, values);
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
                            <th scope="col">Fecha de Eliminación</th>
                            <th scope="col">Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.categories.map( (categorie) => (
                            (categorie.fecha_elimino === null || categorie.fecha_elimino === "") ?
                                null:
                                <tr key={categorie.id}>
                                    <th scope="row">{categorie.id}</th>
                                    <td>{categorie.categoria}</td>
                                    <td>{categorie.usuario_creo}</td>
                                    <td>{categorie.fecha_elimino[0]} {categorie.fecha_elimino[1]}</td>
                                    <td>{(categorie.activo === 1) ? "Activo" : "Inactivo"}</td>
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

export default categoriesTable