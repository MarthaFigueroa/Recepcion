import React from 'react';
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import ObjetoPrestamo from './objetosPrestamo.jsx';
import './../../public/css/global.css';
import { useHistory } from 'react-router-dom'


const RepairedDefectiveObjectsTable = (props) => {
    const history = useHistory();
    

    async function deleted(id, usr){
        console.log(id);
        console.log(usr);
        const values = {"usuario_elimino": usr}
        console.log(values);
        let response = await axiosBaseURL.post(`/delete_defective_object/${id}`, values);
        // console.log("GG: "+ JSON.stringify(response.data.data));
        console.log("Heee: "+response.data.data);
        // setreturned_obj(() => response.data.data);
        // setCart(cart => response.data.data);
        window.location.reload(false);
    }
    return (
        <div>
            <div className="container">
                {/* <h1>OBJETOS REPARADOS</h1> */}
                <table className="table table-responsive text-center mt-5">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                            <th scope="col">Objeto(s)</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Usuario Creo</th>
                            <th scope="col">Fecha Creación</th>
                            <th scope="col">Reparado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.defectives.map( (defective) => (
                                
                                    (defective.reparado === 1) ?
                                    (defective.fecha_elimino === null || defective.fecha_elimino === "") ?
                                    <tr key={defective.id}>
                                        <th scope="row">{defective.id}</th>
                                        <td>{<ObjetoPrestamo objetos={defective.id_objeto}/>}</td>
                                        <td>{defective.motivo}</td>
                                        <td>{defective.cantidad}</td>
                                        <td>{defective.usuario_creo}</td>
                                        
                                        <td>{defective.fecha_creo[0]} {defective.fecha_creo[1]}</td>
                                        <td>{(defective.reparado === 1) ? "Reparado" : "Sin Reparar"}</td>
                                        <td>
                                            <button className="btn btn-light" onClick={(e) => deleted(defective.id, "Carmen", e)}>Eliminar</button>
                                        </td>
                                    </tr>
                                    :null
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

export default RepairedDefectiveObjectsTable