import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'

const inventarioTable = (props) => {

    return(
        <div>
            <div className="container">
                <table className="table table-responsive text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Fecha de Eliminación</th>
                            <th scope="col">Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.objetos.map( (object) => (
                            // (object.activo === 0) ?
                                (object.fecha_elimino === null || object.fecha_elimino === "") ?
                                    null:
                                    <tr key={object.id}>
                                        <th scope="row">{object.id}</th>
                                        <td>{object.objeto}</td>
                                        <td>{object.descripcion}</td>
                                        <td>{object.cantidad}</td>
                                        <td>{object.fecha_elimino[0]} {object.fecha_elimino[1]}</td>
                                        <td>{(object.activo === 1) ? "Activo" : "Inactivo"}</td>
                                    </tr>
                            // :null
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