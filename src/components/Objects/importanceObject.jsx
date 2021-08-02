import React from 'react';
import { axiosBaseURL } from '../../Config/axios';
import { useState, useEffect} from "react";

const ImportanceObject = (props) => {
    const object = props.objetos
    const [objeto, setObjectSelected] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get(`/importance_by_id/${object}`);
            setObjectSelected(response.data.data[0].tipo)
        }
        fetchData();
    }, [])
    return(
        <div>
            <p>{objeto}</p>
        </div>
    )
}
export default ImportanceObject;  