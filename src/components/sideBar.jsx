import React, { Component } from 'react'
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

class sideBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menu: false,
            responsive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu(){
        this.setState({ menu: !this.state.menu, responsive: !this.state.responsive })
    }

    render(){

        const show = (this.state.menu) ? "show collapse navbar-collapse" : "" ;


        return(
            <div className="navbar navbar-expand-lg navbar-dark mb-5 navbar-right">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"sideBar mt-2 mt-lg-0 text-center " + show}>
                    <li className="nav-item">
                    <Link className="nav-link itemSidebar" to="prestamos"><FontAwesomeIcon icon="book"/>Préstamos</Link>
                        <hr/>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="historial"><FontAwesomeIcon icon="history"/>Historiales</Link>
                        <hr/>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="categoria"><FontAwesomeIcon icon="layer-group"/>Categorías</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="mascarilla"><FontAwesomeIcon icon="head-side-mask"/>Mascarillas</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="mascarillasEntregadas"><FontAwesomeIcon icon="head-side-mask"/>Mascarillas Entregadas</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="estadistica"><FontAwesomeIcon icon="chart-bar"/>Estadísticas</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="inventarioObjetos">
                            {/* <FontAwesomeIcon icon=faArchive}/> */}
                            <FontAwesomeIcon icon="folder-open"/>Objetos</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="recordatorio"><FontAwesomeIcon icon="clipboard-list"/>Recordatorios</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="defectuosos"><FontAwesomeIcon icon="exclamation-triangle"/>Defectuosos</Link>
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link itemSidebar" to="usuario"><FontAwesomeIcon icon="address-book"/>Usuarios</Link>
                        <hr/>
                    </li>
                </div>
            </div>
        )
    }
}

export default sideBar;
