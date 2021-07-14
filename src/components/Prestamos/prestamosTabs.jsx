import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Prestamos/PrestamosTable.jsx'
import DisableUsersTable from '../Prestamos/returnedObjectsTable.jsx'
import DeletedUsersTable from '../Prestamos/deletedPrestamosTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [objeto, setObjectSelected] = useState([])
    const [prestamos, setprestamos] = useState([]);
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        response.data.data.map((prestamo) => {
            let fecha = new Date(prestamo.hora_prestamo);
            console.log("A", fecha.toLocaleTimeString());
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = prestamo.hora_prestamo.split("T");
            prestamo.hora_prestamo = arrFecha;
            prestamo.hora_prestamo[1] = arrHora[0]+":"+arrHora[1];
            return arrFecha;
        });
        setprestamos(() => response.data.data);
        console.log("Data:", response.data.data);
        console.log("Objects:", response.data.arrObj);


        let arrId = [];
        const responseObjects = await axiosBaseURL.get(`/list_objects`);            
            
        
        console.log("D", arrId);

        const p = response.data.data;
        const obj = response.data.arrObj;
        const listObj = responseObjects.data.data;
        
        setObjectSelected(listObj);
        let arrObject = [];
        let arrObjectP = [];
        let values = [];


        let finalValueMandar;
        p.map( async (prestamo) => {
            arrObjectP.push(prestamo.id_objeto);
        })

        obj.map( async (objeto) => {
            arrObject.push(objeto);
        })
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Prestamos" title="Prestamos">
                <Table prestamos={prestamos} objetos={objeto}/>
            </Tabs>
            <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <DisableUsersTable prestamos={prestamos} objetos={objeto} />
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable prestamos={prestamos} objetos={objeto} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs