import React from 'react';
import { axiosBaseURL } from '../../Config/axios';
import { useState, useEffect} from "react";

const GivenMask = (props) => {
    const mask = props.masks
    const [masks, setMaskSelected] = useState([])
    useEffect(async() => {
        let response = await axiosBaseURL.get(`/mask_by_id/${mask}`);
        // console.log("Tipo",response.data.data[0].tipo);
        setMaskSelected(response.data.data[0].tipo);
    }, [])
    return(
        <div>
            <p>{masks}</p>
        </div>
    )
}
export default GivenMask;  