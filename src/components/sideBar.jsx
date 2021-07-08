import React from 'react'
import './../public/css/global.css';
// import { library } from './../components/icons.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

const sideBar = () => (
    <div>
        <div className="sideBar mt-2 mt-lg-0 text-center">
            <li className="nav-item">
            <Link className="nav-link" to="prestamos"><FontAwesomeIcon icon="book"/>Préstamos</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="historial"><FontAwesomeIcon icon="history"/>Historiales</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="categoria"><FontAwesomeIcon icon="layer-group"/>Categorías</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="mascarilla"><FontAwesomeIcon icon="head-side-mask"/>Mascarillas</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="estadistica"><FontAwesomeIcon icon="chart-bar"/>Estadísticas</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="inventario">
                    {/* <FontAwesomeIcon icon=faArchive}/> */}
                    <FontAwesomeIcon icon="folder-open"/>Inventario</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="recordatorio"><FontAwesomeIcon icon="clipboard-list"/>Recordatorios</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="defectuosos"><FontAwesomeIcon icon="exclamation-triangle"/>Defectuosos</Link>
                <hr/>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="usuario"><FontAwesomeIcon icon="address-book"/>Usuarios</Link>
                <hr/>
            </li>
        </div>
    </div>
)

export default sideBar;