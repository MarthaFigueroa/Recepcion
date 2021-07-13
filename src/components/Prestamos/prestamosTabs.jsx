import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Prestamos/prestamosTable.jsx'
import DisableUsersTable from '../Prestamos/returnedObjectsTable.jsx'
import DeletedUsersTable from '../Prestamos/deletedPrestamosTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    // const [key, setKey] = useState('home');

    const [objeto, setObjectSelected] = useState([])
    const [prestamos, setprestamos] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_prestamos');
        response.data.data.map((prestamo) => {
            let fecha = new Date(prestamo.hora_prestamo);
            console.log("A", fecha.toLocaleTimeString());
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = prestamo.hora_prestamo.split("T");
            prestamo.hora_prestamo = arrFecha;
            prestamo.hora_prestamo[1] = arrHora[0]+":"+arrHora[1];
            return arrFecha;
        });
        setprestamos(() => response.data.data);
        console.log("Data:", response.data.data);
        setObjectSelected(() => response.data.arrObj);
        console.log("Objects:", response.data.arrObj);


        let arrId = [];
        // response.data.arrObj.map( async (objeto) => {
        //     console.log("Object:", objeto);
            const responseObjects = await axiosBaseURL.get(`/list_objects`);
            // const responseObjects = await axiosBaseURL.get(`/object_by_id/${objeto}`);
            responseObjects.data.data.map( async (objeto) => {
                arrId.push(objeto)
                setObjectSelected(() => arrId);
            })
        // })
        console.log("D", arrId);

        const p = response.data.data;
        const obj = response.data.arrObj;
        const listObj = responseObjects.data.data;

        let arrObject = [];
        let arrObjectP = [];
        let values = [];


        let finalValueMandar;
        p.map( async (prestamo) => {
            // console.log("Prestamos Obj",prestamo.id_objeto);
            arrObjectP.push(prestamo.id_objeto);
        })

        obj.map( async (objeto) => {
            // console.log("Obj id",objeto);
            arrObject.push(objeto);
        })

        console.log("Obj id",arrObject);
        console.log("Obj",listObj);
        console.log("Prestamos Obj",arrObjectP);


        for (let index = 0; index < arrObjectP.length; index++) {
            
            if(arrObjectP[index] === arrObject[index]){
                console.log("yes");
                finalValueMandar = {...values, objeto: listObj.find(() => ( 
                    arrObjectP[index] === arrObject[index]
                ).objeto)}

            }
            
        }



        console.log("Ayuda: "+JSON.stringify(finalValueMandar));

        // response.data.arrObj.map( async (objeto) => {
        //     console.log("Obj id",objeto);
            
        // })

        

    }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
        >
            <Tabs eventKey="Prestamos" title="Prestamos">
                <Table prestamos={prestamos} objetos={objeto}/>
            </Tabs>
            <Tabs eventKey="deletedPrestamos" title="Prestamos Eliminados">
                <DeletedUsersTable prestamos={prestamos} objetos={objeto} />
            </Tabs>
            <Tabs eventKey="returnedObjects" title="Objetos Retornados">
                <DisableUsersTable prestamos={prestamos} objetos={objeto} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs