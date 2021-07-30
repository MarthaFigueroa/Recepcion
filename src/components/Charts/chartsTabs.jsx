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
    const [objetos, setObject] = useState([])
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_objects');
        setObject(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    return (
        <div className="scroll">
            <Tabs id="controlled-tab-example">
                <Tabs eventKey="Objects Chart" title="Inventario de Objetos">
                    <ObjectsChart objetos={objetos}/>              
                </Tabs>
                <Tabs eventKey="Prestamos Chart" title="Préstamos">
                    <PrestamosChart/>              
                </Tabs>
                <Tabs eventKey="Defective Objects Chart" title="Inventario de Objetos Defectuosos">
                    <DefectiveObjectsChart/>              
                </Tabs>
            </Tabs>

        </div>
    );
}

export default ControlledTabs