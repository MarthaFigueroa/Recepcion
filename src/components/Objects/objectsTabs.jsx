import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Objects/objectsTable.jsx'
import DisableObjectsTable from '../Objects/disableObjectsTable.jsx'
import DeletedObjectsTable from '../Objects/deletedObjectsTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [objeto, setObject] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get('/list_objects');
            response.data.data.map((object) => {
                let fecha = new Date(object.fecha_creo);
                const newHour = fecha.toLocaleTimeString();
                const arrHora = newHour.split(":");
                const arrFecha = object.fecha_creo.split("T");
                object.fecha_creo = arrFecha;
                object.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
                
                if(object.fecha_elimino != null){
                    let fechaElimino = new Date(object.fecha_elimino);
                    const newHourE = fechaElimino.toLocaleTimeString();
                    const arrHoraE = newHourE.split(":");
                    const arrFechaE = object.fecha_elimino.split("T");
                    object.fecha_elimino = arrFechaE;
                    object.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
                }

                return object;
            });
            setObject(() => response.data.data);
            console.log("Data:", response.data.data);
        }
        fetchData();
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Objetos" title="Objetos">
                <Table objetos={objeto}/>
            </Tabs>
            <Tabs eventKey="disableObjects" title="Objetos Desactivados">
                <DisableObjectsTable objetos={objeto} />
            </Tabs>
            <Tabs eventKey="deletedObjects" title="Objetos Eliminados">
                <DeletedObjectsTable objetos={objeto} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs