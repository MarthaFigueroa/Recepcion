import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../public/css/global.css';
import logo from './../public/img/UNEAT_W.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg mb-5 navbar-right">
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="imgcontainer">
                <img src={logo} alt="UNIVERSIDAD EUROPEA DEL ATLÁNTICO" className="avatar" />
            </div>
        
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav navbar-left">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Usuario | <FontAwesomeIcon icon="user-circle"/></a>
                    </li>
                </div>
            </div>
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        //     <div className="navbar-brand text-secondary">
        //         <Link href="/">Préstamos</Link>
        //     </div>
            // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav"
            //     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            //     <span className="navbar-toggler-icon"></span>
            // </button>
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