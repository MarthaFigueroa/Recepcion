import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
// import Table from '../Objects/objectsTable.jsx'
// import PieCharts from './PieChart.jsx'
import PrestamosChart from './PrestamosChart.jsx'
import ObjectsChart from './ObjectsChart.jsx'
import MasksChart from './MasksChart.jsx'
import DefectiveObjectsChart from './DefectiveObjectsChart.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [objetos, setObject] = useState([]);
    const [masks, setMasks] = useState([]);

    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_objects');
        setObject(() => response.data.data);
        console.log("Data:", response.data.data);

        const values = {
            "chart": 1
        }

        let responseMasks = await axiosBaseURL.patch('/list_given_masks', values);
        setMasks(() => responseMasks.data.data);
        console.log("Data:", responseMasks.data.data);
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
                <Tabs eventKey="Given Masks Chart" title="Mascarillas Entregadas">
                    <MasksChart masks={masks}/>              
                </Tabs>
            </Tabs>

        </div>
    );
}

export default ControlledTabs