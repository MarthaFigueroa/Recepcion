import React from 'react';
import { axiosBaseURL } from '../../Config/axios';
import { useState, useEffect} from "react";

const ObjetoPrestamo = (props) => {
    const object = props.objetos
    const [objeto, setObjectSelected] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get(`/object_by_id/${object}`);
            setObjectSelected(response.data.data[0].objeto)
        }
        fetchData();
    }, [])
    return(
        <div>
            <p>{objeto}</p>
        </div>
    )
}
export default ObjetoPrestamo;  