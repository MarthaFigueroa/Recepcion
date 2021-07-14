import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Masks/masksTable.jsx'
import DisableUsersTable from '../Prestamos/returnedObjectsTable.jsx'
import DeletedUsersTable from '../Prestamos/deletedPrestamosTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 

    const [masks, setmasks] = useState([]);

    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_masks');
        response.data.data.map((prestamo) => {
            let fecha = new Date(prestamo.fecha_creo);
            console.log("A", fecha.toLocaleTimeString());
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = prestamo.fecha_creo.split("T");
            prestamo.fecha_creo = arrFecha;
            prestamo.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
            return arrFecha;
        });
        setmasks(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Mascarillas" title="Mascarillas">
                <Table masks={masks}/>
            </Tabs>
            {/* <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <DisableUsersTable masks={masks} />
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable masks={masks} />
            </Tabs> */}
        </Tabs>
    );
}

export default ControlledTabs