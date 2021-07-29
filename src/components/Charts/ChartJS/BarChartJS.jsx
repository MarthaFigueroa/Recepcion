import React from 'react';
import 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../../Config/axios.js';
import './../../public/css/global.css';

const PrestamosCharts = (props) => {

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

    const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: objeto.map( (objeto) => (
            objeto.objeto
        )),
        datasets: [
          {
            label: 'Cantidad',
            data: objeto.map( (objeto) => (
                objeto.cantidad
            )),
            backgroundColor: objeto.map( (objeto) => (
                `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
            )),
            //   'rgba(255, 99, 132, 0.4)',
            //   'rgba(54, 162, 235, 0.4)',
            //   'rgba(255, 206, 86, 0.4)',
            //   'rgba(75, 192, 192, 0.4)',
            //   'rgba(153, 102, 255, 0.4)',
            //   'rgba(255, 159, 64, 0.4)',
            
            // borderWidth: 2,
            color: "#777"
          },
        ],
      };
      
    const options = {
        legend: {
            labels: {
                fontColor: "blue",
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "green",
                    backdropColor: 'black',
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "purple",
                    backdropColor: 'black',
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    };

    return(
        <div className="text-center">
            <div className='header'>
                <h1 className='title'>Vertical Bar Chart</h1>
            </div>
            <div className="chart-wrapper"> 
                <Bar data={data} options={options} />
            </div>
        </div>
        
    )
}



export default PrestamosCharts
