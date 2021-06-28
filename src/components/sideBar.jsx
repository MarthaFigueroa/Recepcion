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
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faBook}/>Préstamos</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faHistory}/>Historiales</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faLayerGroup}/>Categorías</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faHeadSideMask}/>Mascarillas</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faChartBar}/>Estadísticas</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={faFolderOpen}/>
                    {/* <FontAwesomeIcon icon={faArchive}/> */}
                    Inventario</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faClipboardList}/>Recordatorios</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faExclamationTriangle}/>Defectuosos</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faAddressBook}/>Usuarios</a>
                <hr/>
            </li>
        </div>
    </div>
)

export default sideBar;
