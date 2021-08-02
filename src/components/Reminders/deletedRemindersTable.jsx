import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'

const DeletedRemindersTable = (props) => {

    return(
        <div>
            <div className="container">
                <table className="table table-responsive text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Recordatorio</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Eliminado por</th>
                            <th scope="col">Fecha de Eliminación</th>
                            <th scope="col">Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.reminders.map( (reminder) => (
                            (reminder.fecha_elimino === null || reminder.fecha_elimino === "") ?
                                null:
                                <tr key={reminder.id}>
                                    <th scope="row">{reminder.id}</th>
                                    <td>{reminder.titulo}</td>
                                    <td>{reminder.descripcion}</td>
                                    <td>{reminder.usuario_elimino}</td>
                                    <td>{reminder.fecha_elimino[0]} {reminder.fecha_elimino[1]}</td>
                                    <td>{(reminder.completado === 1) ? "Completado" : "Sin Completar"}</td>
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

export default DeletedRemindersTable