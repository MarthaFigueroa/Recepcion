import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../DefectiveObjects/defectiveObjectsTable.jsx'
import RepairedObjectsTable from '../DefectiveObjects/repairedDefectiveObjectsTable.jsx'
import DeletedUsersTable from '../DefectiveObjects/deletedDefectiveObjectsTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    // const [key, setKey] = useState('home');

    // const [objeto, setObjectSelected] = useState([])
    const [defective, setdefective] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.patch('/list_defective_objects');
            response.data.data.map((defective) => {
                let fecha = new Date(defective.fecha_creo);
                const newHour = fecha.toLocaleTimeString();
                const arrFecha = defective.fecha_creo.split("T");
                const arrHora = newHour.split(":");
                defective.fecha_creo = arrFecha;
                defective.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
                
                if(defective.fecha_elimino != null){
                    let fechaElimino = new Date(defective.fecha_elimino);
                    const newHourE = fechaElimino.toLocaleTimeString();
                    const arrHoraE = newHourE.split(":");
                    const arrFechaE = defective.fecha_elimino.split("T");
                    defective.fecha_elimino = arrFechaE;
                    defective.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
                }
                
                return defective;
            });
            setdefective(() => response.data.data);
            console.log("Data:", response.data.data);
        }
        fetchData();
    }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
        >
            <Tabs eventKey="Objetos Defectuosos" title="Objetos Defectuosos">
                <Table defectives={defective}/>
            </Tabs>
            <Tabs eventKey="Objetos Reparados" title="Objetos Reparados">
                <RepairedObjectsTable defectives={defective} />
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Objetos Defectuosos/Reparados Eliminados">
                <DeletedUsersTable defectives={defective} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs