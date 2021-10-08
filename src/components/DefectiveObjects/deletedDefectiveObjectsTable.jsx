import React from 'react';
import ObjetoPrestamo from './../Prestamos/objetosPrestamo.jsx';
import 'react-bootstrap';
import './../../public/css/global.css';


const DefectiveObjectsTable = (props) => {
    
    return (
        <div>
            <div className="container-fluid table-responsive table-wrapper">
                {/* <h1>PRÉSTAMOS ELIMINADOS</h1> */}
                <table className="table text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                            <th scope="col">Objeto(s)</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Usuario Creo</th>
                            <th scope="col">Fecha Creación</th>
                            <th scope="col">Reparado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.defectives.map( (defective) => (
                                
                                    (defective.fecha_elimino === null || defective.fecha_elimino === "") ?
                                    null:
                                    <tr key={defective.id}>
                                        <th scope="row">{defective.id}</th>
                                        <td>{<ObjetoPrestamo objetos={defective.id_objeto}/>}</td>
                                        <td>{defective.motivo}</td>
                                        <td>{defective.cantidad}</td>
                                        <td>{defective.usuario_creo}</td>
                                        
                                        <td>{defective.fecha_elimino[0]} {defective.fecha_elimino[1]}</td>
                                        <td>{(defective.reparado === 1) ? "Reparado" : "Sin Reparar"}</td>
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

export default DefectiveObjectsTable