import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'

const categoriesTable = (props) => {

    return(
        <div>
            <div className="container-fluid">
                <div className="table-responsive table-wrapper">
                    <table className="table text-center">
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
        </div>
    )
}

export default categoriesTable