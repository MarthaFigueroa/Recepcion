import React from 'react'
import './../public/css/global.css';
// import { library } from './../components/icons.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

const sideBar = () => (
    <div>
        <div className="sideBar mt-2 mt-lg-0 text-center">
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="book"/>Préstamos</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="history"/>Historiales</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="layer-group"/>Categorías</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="head-side-mask"/>Mascarillas</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="chart-bar"/>Estadísticas</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    {/* <FontAwesomeIcon icon=faArchive}/> */}
                    <FontAwesomeIcon icon="folder-open"/>Inventario</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="clipboard-list"/>Recordatorios</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="exclamation-triangle"/>Defectuosos</a>
                <hr/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="address-book"/>Usuarios</a>
                <hr/>
            </li>
        </div>
    </div>
)

export default sideBar;
