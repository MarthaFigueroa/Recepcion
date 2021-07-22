import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Reminders/remindersTable.jsx'
import CompletedRemindersTable from '../Reminders/completedRemindersTable.jsx'
import DeletedRemindersTable from '../Reminders/deletedRemindersTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [reminder, setReminder] = useState([]);

    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_reminders');
        response.data.data.map((reminder) => {
            let fecha = new Date(reminder.fecha_creo);
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = reminder.fecha_creo.split("T");
            reminder.fecha_creo = arrFecha;
            reminder.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
            
            if(reminder.fecha_elimino != null){
                let fechaElimino = new Date(reminder.fecha_elimino);
                const newHourE = fechaElimino.toLocaleTimeString();
                const arrHoraE = newHourE.split(":");
                const arrFechaE = reminder.fecha_elimino.split("T");
                reminder.fecha_elimino = arrFechaE;
                reminder.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
            }

            // return arrFecha;
        });
        setReminder(() => response.data.data);
        console.log("Data:", response.data.data);

    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Recordatorios" title="Recordatorios">
                <Table reminders={reminder}/>
            </Tabs>
            <Tabs eventKey="disableReminders" title="Recordatorios Completados">
                <CompletedRemindersTable reminders={reminder} />
            </Tabs>
            <Tabs eventKey="deletedReminders" title="Recordatorios Eliminados">
                <DeletedRemindersTable reminders={reminder} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs