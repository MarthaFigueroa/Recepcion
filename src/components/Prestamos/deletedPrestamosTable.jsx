import React from 'react';
import 'react-bootstrap';
import './../../public/css/global.css';


const PrestamosTable = (props) => {
    
    return (
        <div>
            <div className="container">
                <h1>PRÉSTAMOS</h1>
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Fecha Préstamo</th>
                            <th scope="col">Devolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.prestamos.map( (prestamo) => (
                                
                                    (prestamo.fecha_elimino === null || prestamo.fecha_elimino === "") ?
                                    null:
                                    <tr key={prestamo.id}>
                                        <th scope="row">{prestamo.id}</th>
                                        <td>{prestamo.nombres}</td>
                                        <td>{prestamo.apellidos}</td>
                                        <td>{prestamo.email}</td>
                                        <td>{prestamo.id_objeto}</td>
                                        <td>{prestamo.hora_prestamo[0]} {prestamo.hora_prestamo[1]}</td>
                                        <td>{(prestamo.devuelto === 1) ? "Devuelto" : "Sin Devolver"}</td>
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

export default PrestamosTable