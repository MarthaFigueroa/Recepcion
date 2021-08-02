import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Prestamos/PrestamosTable.jsx'
import DisableUsersTable from '../Prestamos/returnedObjectsTable.jsx'
import DeletedUsersTable from '../Prestamos/deletedPrestamosTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [prestamos, setprestamos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.patch('/list_prestamos');
            response.data.data.map((prestamo) => {
                let fecha = new Date(prestamo.hora_prestamo);
                const newHour = fecha.toLocaleTimeString();
                const arrHora = newHour.split(":");
                const arrFecha = prestamo.hora_prestamo.split("T");
                prestamo.hora_prestamo = arrFecha;
                prestamo.hora_prestamo[1] = arrHora[0]+":"+arrHora[1];
                
                if(prestamo.fecha_elimino != null){
                    let fechaElimino = new Date(prestamo.fecha_elimino);
                    const newHourE = fechaElimino.toLocaleTimeString();
                    const arrHoraE = newHourE.split(":");
                    const arrFechaE = prestamo.fecha_elimino.split("T");
                    prestamo.fecha_elimino = arrFechaE;
                    prestamo.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
                }
    
                return prestamo;
            });
            setprestamos(() => response.data.data);
            console.log("Data:", response.data.data);
        }
        fetchData();
    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Prestamos" title="Prestamos">
                <Table prestamos={prestamos}/>
            </Tabs>
            <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <DisableUsersTable prestamos={prestamos} />
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable prestamos={prestamos} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs