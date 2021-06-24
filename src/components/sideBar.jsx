import React from 'react'

const sideBar = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Préstamo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Entregados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Deudores</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Registro de Pérdida</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Historial</a>
            </li>
        </div>
    </div>
)

export default sideBar
