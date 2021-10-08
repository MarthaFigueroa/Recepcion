import React from 'react';
import 'react-bootstrap';
import RoleUser from './roleUser.jsx';
import './../../public/css/global.css';

const UsersTable = (props) => {

    return (
        <div>
            <div className="container-fluid table-responsive table-wrapper">
                {/* <h1>USUARIOS ELIMINADOS</h1> */}
                <table className="table text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Nombre de Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.usuarios.map( (usuario) => (
                                
                                    (usuario.fecha_elimino === null || usuario.fecha_elimino === "") ?
                                    null:
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.apellidos}</td>
                                        <td>{usuario.email}</td>
                                        <td>{<RoleUser roles={usuario.id_rol}/>}</td>
                                        <td>{usuario.usuario}</td>
                                        {/* <td>{(usuario.habilitado === 1) ? "Devuelto" : "Sin Devolver"}</td> */}
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

export default UsersTable