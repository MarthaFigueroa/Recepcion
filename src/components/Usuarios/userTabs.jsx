import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from './../Usuarios/usersTable.jsx'
import DisableUsersTable from './../Usuarios/disableUsersTable.jsx'
import DeletedUsersTable from './../Usuarios/deletedUsersTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    // const [key, setKey] = useState('home');

    const [usuarios, setusuarios] = useState([]);
    // eslint-disable-next-line
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_users');
        setusuarios(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])
  
    return (
        <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
        >
            <Tabs eventKey="Usuarios" title="Usuarios">
                <Table usuarios={usuarios} />
            </Tabs>
            <Tabs eventKey="disableUsers" title="Usuarios Deshabilitados">
                <DisableUsersTable usuarios={usuarios} />
            </Tabs>
            <Tabs eventKey="deletedUsers" title="Usuarios Eliminados">
                <DeletedUsersTable usuarios={usuarios} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs