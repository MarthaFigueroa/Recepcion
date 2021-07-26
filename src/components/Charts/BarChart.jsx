import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import { useState, useEffect } from "react";
import './../../public/css/global.css';
import { axiosBaseURL } from '../../Config/axios.js';

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const BarChart = () => {
  const [objeto, setObject] = useState([]);
  let [startDate, setStartDate] = useState("")
  let [endDate, setEndDate] = useState("")

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
    console.log("Bar Data:", response.data.data);
  }, [])

const chartData = objeto.map( (objeto) => (
  {
    "label": objeto.objeto,
    "value": objeto.cantidad
  }
))
  
const chartConfigs = {
  type: "column3d", 
  width: "800", 
  height: "500", 
  dataFormat: "json", 
  dataSource: {
    chart: {
      caption: "Inventario de Objetos",
      subCaption: "En Unidades = (u)*",
      xAxisName: "Nombre del Objeto",
      yAxisName: "Cantidad",
      numberSuffix: "u",
      theme: "candy"
    },
    data: chartData
  }
};

async function startDateValue(event) {
  const newValue = event.target.value;
  console.log("Value", newValue);
  await setStartDate(newValue);
}
async function endDateValue(event) {
  const newValue = event.target.value+" 23:59:59";
  console.log("Value", newValue);
  await setEndDate(newValue);
}

async function GetValues(){
  console.log("Start Date",startDate);
  console.log("End Date",endDate);

  const values = {
    "start_date":  startDate,
    "end_date":  endDate
  }

  const response = await axiosBaseURL.patch('/list_prestamos', values);
  console.log("data GG", response.data.data);
}

  return (
    <div>
      <div className="form-row form-fields">
          <label className="lbl">Fecha de Inicio: </label>
      </div>
      <div>
        <input type="date" onChange = {startDateValue} required />
      </div>
      <div className="form-row form-fields">
          <label className="lbl">Fecha de Fin: </label>
      </div>
      <div>
        <input type="date" onChange = {endDateValue} required />
      </div>
      <button className="btn btn-light" onClick={GetValues}>Get values</button>
      <ReactFC className="text-center mt-5" {...chartConfigs} />
    </div>
  )
}

export default BarChart;