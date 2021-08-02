import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import GivenMasksTable from '../GivenMasks/givenMasksTable.jsx'
import DeletedGivenMasksTable from '../GivenMasks/deletedGivenMasksTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 

    const [givenmasks, setgivenmasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.patch('/list_given_masks');
            response.data.data.map((givenMask) => {
                let fecha = new Date(givenMask.fecha_creo);
                const newHour = fecha.toLocaleTimeString();
                const arrHora = newHour.split(":");
                const arrFecha = givenMask.fecha_creo.split("T");
                givenMask.fecha_creo = arrFecha;
                givenMask.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
                
                if(givenMask.fecha_elimino != null){
                    let fechaElimino = new Date(givenMask.fecha_elimino);
                    const newHourE = fechaElimino.toLocaleTimeString();
                    const arrHoraE = newHourE.split(":");
                    const arrFechaE = givenMask.fecha_elimino.split("T");
                    givenMask.fecha_elimino = arrFechaE;
                    givenMask.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
                }

                return givenMask;
            });
            setgivenmasks(() => response.data.data);
            console.log("Data:", response.data.data);
        }
        fetchData();
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="givenMasks" title="Mascarillas Entregadas">
                <GivenMasksTable masks={givenmasks} />
            </Tabs>
            <Tabs eventKey="deletedMasks" title="Mascarillas Entregadas Eliminadas">
                <DeletedGivenMasksTable masks={givenmasks} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs