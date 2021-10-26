import React from 'react';
import { axiosBaseURL } from '../../Config/axios';
import { useState, useEffect} from "react";

const RoleUser = (props) => {
    const rol = props.roles
    const [role, setRoleSelected] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get(`/role_by_id/${rol}`);
            setRoleSelected(response.data.data[0].rol)
        }
        fetchData();
    })
    return(
        <div>
            <p>{role}</p>
        </div>
    )
}
export default RoleUser;  