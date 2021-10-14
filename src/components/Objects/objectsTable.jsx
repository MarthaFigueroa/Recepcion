import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css'
import { axiosBaseURL } from '../../Config/axios.js';
import { Link, useHistory } from 'react-router-dom'
import ImportanceObject from './importanceObject.jsx';
import CategorieObject from './categorieObject.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const ObjectsTable = (props) => {

    const history = useHistory();

    const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

    library.add(...iconList);

    async function disable_obj(id, activo){
        console.log(id);
        const values = {
            "activo": activo
        }
        let response = await axiosBaseURL.post(`/update_object/${id}`, values);
        console.log("Heee: "+response.data.data);
        window.location.reload(false);
    }

    async function edit(objects){
        console.log(objects);
        history.push(`/editObjeto/${objects.id}`);
    }
    function mysortTable(order) {
        var tables, rows, sorting, c, a, b, tblsort;
        tables = document.getElementById("tables");
        sorting = true;
        while (sorting) {
          sorting = false;
          rows = tables.rows;
          for (c = 1; c < (rows.length - 1); c++) {
            tblsort = false;
            a = rows[c].getElementsByTagName("td")[0];
            b = rows[c + 1].getElementsByTagName("td")[0];
            if(order == "Asc"){
                if (a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase()) {
                  tblsort = true;
                  break;
                }
            }else if(order == "Desc"){
                if (a.innerHTML.toLowerCase() < b.innerHTML.toLowerCase()) {
                    tblsort = true;
                    break;
                }
            }
          }
            if (tblsort) {
              rows[c].parentNode.insertBefore(rows[c + 1], rows[c]);
              sorting = true;
            }
        }
    }

    const styleTh = {
        textAlign: 'end'
    }

    return(
        <div>
            <div className="table-wrapper">
                <Link className="button-AddPrestamo" to="/newObjeto"><b>+ Agregar Objeto</b></Link>
                <div className="table-responsive table-wrapper">
                    <table id="tables" className="table text-center mt-5">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={styleTh}>
                                    Objeto
                                    <div className="order">
                                        <FontAwesomeIcon onClick={(e) => mysortTable("Asc", e)} icon="caret-up"/>
                                        <FontAwesomeIcon onClick={(e) => mysortTable("Desc", e)} icon="caret-down"/>
                                    </div>
                                </th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Importancia</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Fecha de creación</th>
                                <th scope="col">Activo</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.objetos.map( (object) => (
                                (object.activo === 1) ?
                                <tr key={object.id}>
                                    <th scope="row">{object.id}</th>
                                    <td>{object.objeto}</td>
                                    <td>{object.descripcion}</td>
                                    <td>{object.cantidad}</td>
                                    <td><ImportanceObject objetos={object.id_importancia}/></td>
                                    <td><CategorieObject objetos={object.id_categoria}/></td>
                                    <td>{object.fecha_creo[0]} {object.fecha_creo[1]}</td>
                                    <td>{(object.activo === 1) ? "Activo" : "Inactivo"}</td>
                                    <td>
                                        <button className="btn btn-light return" key={object.id} onClick={(e) => disable_obj(object.id, 0, e)}>Desactivar</button> 
                                        <button className="btn btn-light return" onClick={(e) => edit(object, e)}>Editar</button>
                                        <button className="btn btn-light return" onClick={(e) => mysortTable(e)}>Sort</button>
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
        </div>
    )
}

export default ObjectsTable