import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../DefectiveObjects/defectiveObjectsTable.jsx'
import RepairedObjectsTable from '../DefectiveObjects/repairedDefectiveObjectsTable.jsx'
import DeletedUsersTable from '../DefectiveObjects/deletedDefectiveObjectsTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    // const [key, setKey] = useState('home');

    const [objeto, setObjectSelected] = useState([])
    const [defective, setdefective] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_defective_objects');
        response.data.data.map((defective) => {
            const arrFecha = defective.fecha_creo.split("T");
            const arrHora = arrFecha[1].split(":");
            defective.fecha_creo = arrFecha;
            defective.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
            return arrFecha;
        });
        setdefective(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
        >
            <Tabs eventKey="Prestamos" title="Prestamos">
                <Table defectives={defective}/>
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable defectives={defective} />
            </Tabs>
            <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <RepairedObjectsTable defectives={defective} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs