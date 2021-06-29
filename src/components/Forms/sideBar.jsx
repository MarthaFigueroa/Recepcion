import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import logo from './../../public/img/UNEAT_W.png';

const sideBar = () => (
    <div className="blue-div p-5 text-center h-100">
        <div className="py-5">
            <div className="imgcontainer mb-4 mx-auto text-center">
                <img src={logo} width="auto" height="80" alt="UNIVERSIDAD EUROPEA DEL ATLÁNTICO" className="avatar mx-auto text-center"/>
                {/* src="../public/img/UNEAT_W.png" */}
            </div>
            <h2 className="color text-center mb-4 py-3">
                <span className="fa fa-sing-in"></span> Préstamo de Objetos Uneatlantico
            </h2>

            <p className="text-center contentBar">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis debitis recusandae 
            </p>
        </div>
    </div>
)

export default sideBar;