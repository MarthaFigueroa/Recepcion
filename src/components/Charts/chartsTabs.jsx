import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
// import Table from '../Objects/objectsTable.jsx'
import PieCharts from './PieChart.jsx'
import PrestamosChart from './PrestamosChart.jsx'
import ObjectsChart from './ObjectsChart.jsx'
import DefectiveObjectsChart from './DefectiveObjectsChart.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [objeto, setObject] = useState([])
    useEffect(async() => {
        // let response = await axiosBaseURL.get('/list_objects');
        // response.data.data.map((object) => {
        //     let fecha = new Date(object.fecha_creo);
        //     const newHour = fecha.toLocaleTimeString();
        //     const arrHora = newHour.split(":");
        //     const arrFecha = object.fecha_creo.split("T");
        //     object.fecha_creo = arrFecha;
        //     object.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
            
        //     if(object.fecha_elimino != null){
        //         let fechaElimino = new Date(object.fecha_elimino);
        //         const newHourE = fechaElimino.toLocaleTimeString();
        //         const arrHoraE = newHourE.split(":");
        //         const arrFechaE = object.fecha_elimino.split("T");
        //         object.fecha_elimino = arrFechaE;
        //         object.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
        //     }

        //     // return arrFecha;
        // });
        // setObject(() => response.data.data);
        // console.log("Data:", response.data.data);
    }, [])

    return (
        <div className="scroll">
            <Tabs id="controlled-tab-example">
                <Tabs eventKey="Prestamos Chart" title="Préstamos">
                    <PrestamosChart/>              
                </Tabs>
                <Tabs eventKey="Objects Chart" title="Inventario de Objetos">
                    <ObjectsChart/>              
                </Tabs>
                <Tabs eventKey="Defective Objects Chart" title="Inventario de Objetos Defectuosos">
                    <DefectiveObjectsChart/>              
                </Tabs>
                {/* <Tabs eventKey="disableObjects" title="Objetos Desactivados">
                    <DisableObjectsTable objetos={objeto} />
                </Tabs>
                <Tabs eventKey="deletedObjects" title="Objetos Eliminados">
                    <DeletedObjectsTable objetos={objeto} />
                </Tabs> */}
            </Tabs>

        </div>
    );
}

export default ControlledTabs