import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { axiosBaseURL } from '../../Config/axios.js';

const CompletedRemindersTable = (props) => {

    async function deleteR(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_elimino": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_reminder/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    return(
        <div>
            <div className="container-fluid table-responsive table-wrapper">
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Recordatorio</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Creado por</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // console.log("kk: "+JSON.stringify(props.prestamos))
                        props.reminders.map( (reminder) => (
                            (reminder.completado === 1 && reminder.fecha_elimino === null) ?
                                <tr key={reminder.id}>
                                    <th scope="row">{reminder.id}</th>
                                    <td>{reminder.titulo}</td>
                                    <td>{reminder.descripcion}</td>
                                    <td>{reminder.usuario_creo}</td>
                                    <td>{reminder.fecha_creo[0]} {reminder.fecha_creo[1]}</td>
                                    <td>{(reminder.completado === 1) ? "Completado" : "Sin Completar"}</td>
                                    <td>
                                        <button className="btn btn-light return" onClick={(e) => deleteR(reminder.id, "Daniel", e)}>Eliminar</button>
                                    </td>
                                </tr>
                                :null
                        )
                    )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompletedRemindersTable