import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { Link } from 'react-router-dom'

const inventarioTable = () => (
    <div>
        <div className="container">
            <br/><br/><br/>
            <h1>Inventario</h1>
            <Link className="button-AddPrestamo" to=""><b>+ Agregar Material</b></Link>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Modelo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Llave -2.1</td>
                        <td>Nuevo</td>
                        <td>3</td>
                        <td>Común</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Llave Ascensor</td>
                        <td>Semi Nuevo</td>
                        <td>8</td>
                        <td>Común</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Llave -2</td>
                        <td>Nuevo</td>
                        <td>6</td>
                        <td>Llave Maestra</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default inventarioTable