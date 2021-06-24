import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../public/css/global.css';
import logo from './../public/img/UNEAT_W.png'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg mb-5">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="imgcontainer">
                <img src={logo} alt="UNIVERSIDAD EUROPEA DEL ATLÁNTICO" className="avatar" />
            </div>
        
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
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        //     <div className="navbar-brand text-secondary">
        //         <Link href="/">Préstamos</Link>
        //     </div>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav"
        //         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse w-100" id="navbarNav">
        //         <ul className="navbar-nav w-100">
        //             <li className="nav-item active">
        //                 <div className="nav-link">
        //                     <Link href="/usuarios">Usuario</Link>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default NavBar