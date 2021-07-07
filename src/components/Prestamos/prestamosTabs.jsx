import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Prestamos/prestamosTable.jsx'
import DisableUsersTable from '../Prestamos/returnedObjectsTable.jsx'
import DeletedUsersTable from '../Prestamos/deletedPrestamosTable.jsx'
import { Tab, Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [key, setKey] = useState('home');

    const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        // console.log("GG: "+ JSON.stringify(response.data.data));
        response.data.data.map((prestamo) => {
            const arrFecha = prestamo.hora_prestamo.split("T");
            const arrHora = arrFecha[1].split(":");
            prestamo.hora_prestamo = arrFecha;
            prestamo.hora_prestamo[1] = arrHora[0]+":"+arrHora[1];
            // console.log("Array:", prestamo.hora_prestamo);
            return arrFecha;
        });
        setprestamos(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])
  
    return (
        <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tabs eventKey="Prestamos" title="Prestamos">
                <Table prestamos={prestamos} />
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable prestamos={prestamos} />
            </Tabs>
            <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <DisableUsersTable prestamos={prestamos} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs