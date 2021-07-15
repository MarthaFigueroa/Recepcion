import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Masks/masksTable.jsx'
import DeletedMasksTable from '../Masks/deletedMasksTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 

    const [masks, setmasks] = useState([]);

    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_masks');
        response.data.data.map((mask) => {
            let fecha = new Date(mask.fecha_creo);
            console.log("A", fecha.toLocaleTimeString());
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = mask.fecha_creo.split("T");
            mask.fecha_creo = arrFecha;
            mask.fecha_creo[1] = arrHora[0]+":"+arrHora[1];

            if(mask.fecha_elimino != null){
                let fechaElimino = new Date(mask.fecha_elimino);
                console.log("F", fechaElimino.toLocaleTimeString());
                const newHourE = fechaElimino.toLocaleTimeString();
                const arrHoraE = newHourE.split(":");
                const arrFechaE = mask.fecha_elimino.split("T");
                mask.fecha_elimino = arrFechaE;
                mask.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
            }

            // return arrFechaE;
        });
        setmasks(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Mascarillas" title="Mascarillas">
                <Table masks={masks}/>
            </Tabs>
            <Tabs eventKey="deletedMasks" title="Mascarillas Eliminadas">
                <DeletedMasksTable masks={masks} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs