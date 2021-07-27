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
  const [prestamo, setPrestamo] = useState([]);
  let [startDate, setStartDate] = useState([])
  let [endDate, setEndDate] = useState([]);

  useEffect(async() => {
    const today = new Date();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    setStartDate ( () => `${today.getFullYear()}-${month}-${today.getDate()}`);
    // setEndDate ( () => `${today.getFullYear()}-${month}-${today.getDate()} 23:59:59`);
    setEndDate ( () => `${today.getFullYear()}-${month}-${today.getDate()}`);

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

const chartPrestamosData = prestamo.map( (prestamo) => (
  {
    "label": prestamo.objeto,
    "value": prestamo.prestamos
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

const chartPrestamosConfigs = {
  type: "column3d", 
  width: "800", 
  height: "500", 
  dataFormat: "json", 
  dataSource: {
    chart: {
      caption: "Historial de Préstamos",
      subCaption: "Por Fecha",
      xAxisName: "Nombre del Objeto Prestado",
      yAxisName: "Cantidad de Objetos Prestados",
      theme: "candy"
    },
    data: chartPrestamosData
  }
};

// chartPrestamosConfigs.setTransparent(true);

async function startDateValue(event) {
  const newValue = event.target.value;
  console.log("Value", newValue);
  await setStartDate(newValue);
}
async function endDateValue(event) {
  const newValue = event.target.value;
  console.log("Value", newValue);
  await setEndDate(newValue);
}

async function GetValues(){
  console.log("Start Date",startDate);
  console.log("End Date",endDate);

  const values = {
    "start_date":  startDate,
    "end_date":  endDate+" 23:59:59"
  }

  const response = await axiosBaseURL.patch('/list_prestamos', values);
  console.log("data GG", response.data.data);
  setPrestamo( () => response.data.data);
}

  return (
    <div>
      <div className="form-row">
        <div className="form-group dateDiv col-md-6">
          <label className="lbl">Fecha de Inicio: </label>
          <input className="form-control" type="date" onChange = {startDateValue} value={startDate} required /> 
        </div>
        <div className="form-group dateDiv col-md-6">
          <label className="lbl">Fecha de Fin: </label>
          <input className="form-control" type="date" onChange = {endDateValue} value={endDate} required /> 
        </div>
        <div className="form-group dateDiv col-md-6 mt-3">
          <button className="btn btn-light mx-auto" onClick={GetValues}>Get values</button>
        </div>
      </div>
      {/* <ReactFC className="text-center mt-5" {...chartConfigs} /> */}
      <ReactFC legendBgAlpha='0' canvasBgAlpha='0' className="text-center mt-5" {...chartPrestamosConfigs} hiden/>
    </div>
  )
}

export default BarChart;