import React from 'react'
import './../public/css/global.css';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import imgUniversidad from '../public/img/UNEAT_W.png';
import {
  faHeadSideMask,
  faUser,
  faHistory,
  faBook,
  faClipboardList,
  faAddressBook,
  faArchive,
  faFolderOpen,
  faLayerGroup,
  faExclamationTriangle,
  faChartBar
} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faHeadSideMask,
    faUser,
    faHistory,
    faBook,
    faClipboardList,
    faAddressBook,
    faArchive,
    faFolderOpen,
    faLayerGroup,
    faExclamationTriangle,
    faChartBar
)

const sideBar = () => (
    <div>
        <div className="sideBar mt-2 mt-lg-0 text-center">
            <img src={imgUniversidad} alt="Imagen de la Universidad" className="imgUni" width="180px"/>
            <li className="nav-item">
                <Link className="nav-link" to="prestamos"><FontAwesomeIcon icon={faBook} size="2px"/>Préstamos</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="historial"><FontAwesomeIcon icon={faHistory} size="2px"/>Historiales</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="categoria"><FontAwesomeIcon icon={faLayerGroup} size="2px"/>Categorías</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="mascarilla"><FontAwesomeIcon icon={faHeadSideMask} size="2px"/>Mascarillas</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="estadistica"><FontAwesomeIcon icon={faChartBar} size="2px"/>Estadísticas</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="inventario"><FontAwesomeIcon icon={faFolderOpen} size="2px"/>Inventario</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="recordatorio"><FontAwesomeIcon icon={faClipboardList} size="2px"/>Recordatorios</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="defectuosos"><FontAwesomeIcon icon={faExclamationTriangle} size="2px"/>Defectuosos</Link>
            </li>
            <hr/>
            <li className="nav-item">
                <Link className="nav-link" to="usuario"><FontAwesomeIcon icon={faAddressBook} size="2px"/>Usuarios</Link>
            </li>
            <hr/>
        </div>
    </div>
)

export default sideBar;
