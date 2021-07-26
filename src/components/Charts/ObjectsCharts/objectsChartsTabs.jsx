import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../../Config/axios.js';
// import Table from '../Objects/objectsTable.jsx'
import PieCharts from '../../Charts/PieChart.jsx'
import BarChart from '../../Charts/BarChart.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [objeto, setObject] = useState([])
    useEffect(async() => {
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

            // return arrFecha;
        });
        setObject(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Bar Chart Objects" title="Estadísticas de Objetos">
                <BarChart/>              
                <PieCharts/>  
            </Tabs>
            <Tabs eventKey="Pie Chart Objects" title="Pie Chart">
            </Tabs>
            {/* <Tabs eventKey="disableObjects" title="Objetos Desactivados">
                <DisableObjectsTable objetos={objeto} />
            </Tabs>
            <Tabs eventKey="deletedObjects" title="Objetos Eliminados">
                <DeletedObjectsTable objetos={objeto} />
            </Tabs> */}
        </Tabs>
    );
}

export default ControlledTabs