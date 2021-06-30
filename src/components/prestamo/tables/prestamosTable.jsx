import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../public/css/global.css'
import { Link } from 'react-router-dom'

const prestamosTable = () => (
    <div>
        <div className="container">
            <br/><br/><br/>
            <h1>PRESTAMO</h1>
            <Link className="button-AddPrestamo" to="/newPrestamo"><b>+ Agregar Préstamo</b></Link>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre(s)</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Email</th>
                        <th scope="col">Objeto</th>
                        <th scope="col">Fecha Préstamo</th>
                        <th scope="col">Devolución</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark@mail.com</td>
                        <td>Llave del Ascensor</td>
                        <td>2020-11-09</td>
                        <td>Sin Devolver</td>
                        <td><button className="btn btn-light">Devolver</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Jacob@mail.com</td>
                        <td>Llave del Ascensor</td>
                        <td>2020-11-09</td>
                        <td>Sin Devolver</td>
                        <td><button className="btn btn-light">Devolver</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Larry@mail.com</td>
                        <td>Llave del Ascensor</td>
                        <td>2020-11-09</td>
                        <td>Sin Devolver</td>
                        <td><button className="btn btn-light">Devolver</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default prestamosTable