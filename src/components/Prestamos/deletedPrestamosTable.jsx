import React from 'react';
import 'react-bootstrap';
import ObjetoPrestamo from './objetosPrestamo.jsx';
import './../../public/css/global.css';

const PrestamosTable = (props) => {
    
    return (
        <div>
            <div className="container-fluid table-responsive table-wrapper">
                {/* <h1>PRÉSTAMOS</h1> */}
                <table className="table text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Objeto</th>
                            <th scope="col">Fecha de Eliminación</th>
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
                                        <td>{<ObjetoPrestamo objetos={prestamo.id_objeto}/>}</td>
                                        <td>{prestamo.fecha_elimino[0]} {prestamo.fecha_elimino[1]}</td>
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