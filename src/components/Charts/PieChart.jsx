import React from 'react';
import { Pie } from 'react-chartjs-2';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import 'react-bootstrap';
import 'chartjs-plugin-datalabels'

const PieChart = () => {

    const randomNum = () => Math.floor(Math.random() * 255);
    const randomNumG = () => Math.floor(Math.random() * 220)+0;
    const randomNumR = () => Math.floor(Math.random() * 183)+0;
    const [objeto, setObject] = useState([])
    useEffect(async() => {
        let response = await axiosBaseURL.get('/list_objects');
        response.data.data.map((object) => {
            let fecha = new Date(object.fecha_creo);
            const newHour = fecha.toLocaleTimeString();
            const arrHora = newHour.split(":");
            const arrFecha = object.fecha_creo.split("T");
            object.fecha_creo = arrFecha;
            object.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
            
            if(object.fecha_elimino != null){
                let fechaElimino = new Date(object.fecha_elimino);
                const newHourE = fechaElimino.toLocaleTimeString();
                const arrHoraE = newHourE.split(":");
                const arrFechaE = object.fecha_elimino.split("T");
                object.fecha_elimino = arrFechaE;
                object.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
            }
        });
        setObject(() => response.data.data);
        console.log("Data:", response.data.data);
    }, [])

    const data = {
        labels: objeto.map( (objeto) => (
            objeto.objeto
        )),

            // labels: {
            //   render: 'value',
            //   fontSize: 14,
            //   fontStyle: 'bold',
            //   fontColor: '#000',
            //   fontFamily: '"Lucida Console", Monaco, monospace'
            // },
        datasets: [
          {
            data: objeto.map( (objeto) => (
                objeto.cantidad
            )),
            // backgroundColor: [
            //   'rgba(255, 99, 132, 0.4)',
            //   'rgba(54, 162, 235, 0.4)',
            //   'rgba(255, 206, 86, 0.4)',
            //   'rgba(75, 192, 192, 0.4)',
            //   'rgba(153, 102, 255, 0.4)',
            //   'rgba(255, 159, 64, 0.4)',
            // ],
            backgroundColor: objeto.map( (objeto) => (
                `rgba(${randomNumR()}, ${randomNumG()}, ${randomNum()}, 0.4)`
            )),
            // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            // ],
            // borderWidth: 2,
            hoverOffset: 15
          },
        ]
    };


    return(
        <div className="text-center">
            <div className='header'>
                <h1 className='title'>Pie Chart</h1>
            </div>
            <div className="pie-chart-wrapper">
                <Pie data={data}/> 
            </div>
        </div>
    )
}

export default PieChart;