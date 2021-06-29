import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';

const prestamosTable = (props) => {

    return (
        <div>
            <div className="container">
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
                        {
                            console.log("kk: "+JSON.stringify(props.prestamos))
                        //     prestamos.map( prestamo => (
                        //         <tr>
                        //             <th scope="row">{prestamo}</th>
                        //             <td>{prestamo.id}</td>
                        //             <td>{prestamo.id}</td>
                        //             <td>{prestamo.id}</td>
                        //             <td>{prestamo.id}</td>
                        //             <td>{prestamo.id}</td>
                        //             <td>{prestamo.id}</td>
                        //             <td><button className="btn btn-light">Devolver</button></td>
                        //         </tr>
                        //     )
                        // )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default prestamosTable