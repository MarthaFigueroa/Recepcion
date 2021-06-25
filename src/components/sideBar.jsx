import React from 'react'
import './../public/css/global.css';

import { library } from '@fortawesome/fontawesome-svg-core'
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
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faBook} size="2px"/>Préstamos</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faHistory} size="2px"/>Historiales</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faLayerGroup} size="2px"/>Categorías</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faHeadSideMask} size="2px"/>Mascarillas</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faChartBar} size="2px"/>Estadísticas</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={faFolderOpen} size="2px"/>
                    {/* <FontAwesomeIcon icon={faArchive} size="2px"/> */}
                    Inventario</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faClipboardList} size="2px"/>Recordatorios</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faExclamationTriangle} size="2px"/>Defectuosos</a>
            </li>
            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faAddressBook} size="2px"/>Usuarios</a>
            </li>
            <hr/>
        </div>
    </div>
)

export default sideBar;
