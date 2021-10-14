import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import { useState, useEffect } from "react";
import './../../public/css/global.css';
import { axiosBaseURL } from '../../Config/axios.js';

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const MasksChart = (props) => {
  // const [objeto, setObject] = useState([]);
  const [masks, setMasks] = useState([]);
  let [startDate, setStartDate] = useState([])
  let [endDate, setEndDate] = useState([]);
  let [order, setOrder] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const today = new Date();
      const month = ("0" + (today.getMonth() + 1)).slice(-2);
      const day = ("0" + (today.getDate())).slice(-2);
      const date = `${today.getFullYear()}-${month}-${day}`;
      const order = 1;
      // console.log(date);
      setStartDate ( () => date);
      setEndDate ( () => `${today.getFullYear()}-${month}-${today.getDate()} 23:59:59`);
      setEndDate ( () => date);
      setOrder ( () => order);
      
      GetValues2(date, date, order); //"2021-06-28"
    }

    fetchData();
  }, [])

const chartGivenMasksData = masks.map( (mask) => (
  {
    "label": mask.nombres+" -> "+ mask.mascarilla,
    "value": mask.entregadas
  }
))

const chartGivenMasksConfigs = {
  type: "column3d", 
  width: "800", 
  height: "500", 
  dataFormat: "json", 
  dataSource: {
    chart: {
      caption: "Historial de Mascarillas Entregadas",
      subCaption: "Por Fecha",
      xAxisName: "Nombre del Usuario al que se ha entregado",
      yAxisName: "Cantidad de Mascarillas Entregadas",
      theme: "candy",
      showLegend: 1
    },
    data: chartGivenMasksData
  }
};

const chartGivenMasksPieConfigs = {
  type: "pie3d", 
  width: "800", 
  height: "500", 
  dataFormat: "json", 
  dataSource: {
    chart: {
      caption: "Historial de Mascarillas Entregadas",
      subCaption: "Por Fecha",
      xAxisName: "Nombre del Usuario al que se ha entregado",
      yAxisName: "Cantidad de Mascarillas Entregadas",
      theme: "candy"
    },
    data: chartGivenMasksData
  }
};

async function startDateValue(event) {
  const newValue = event.target.value;
  // console.log("Value", newValue);
  await setStartDate(newValue);
}
async function endDateValue(event) {
  const newValue = event.target.value;
  // console.log("Value", newValue);
  await setEndDate(newValue);
}

async function GetOrder(event){
  const newValue = event.target.value;
  // console.log("Value", newValue);
  await setOrder(newValue);
}

async function GetValues2(startDate, endDate, order){
  // console.log("Start Date Mask",startDate);
  // console.log("End Date Mask",endDate);

  const values = {
    "chart": 1,
    "start_date":  startDate,
    "end_date":  endDate+" 23:59:59",
    "asc": order
  }
  console.log(values);

  const response = await axiosBaseURL.patch('/list_given_masks', values);
  console.log("data GG", response.data.data);
  setMasks( () => response.data.data);
  return response.data.data;
}

async function GetValues(){
  // console.log("Start Date",startDate);
  // console.log("End Date",endDate);

  const values = {
    "chart": 1,
    "start_date":  startDate,
    "end_date":  endDate+" 23:59:59",
    "asc": order
  }
  console.log(values);

  const response = await axiosBaseURL.patch('/list_given_masks', values);
  console.log("data GG", response.data.data);
  setMasks( () => response.data.data);
  return response.data.data;
}

  return (
    <div className="table-wrapper">
      <div className="form-row">
        <div className="form-group dateDiv col-md-6">
          <label className="lbl">Ordenar por: </label>
          <select className="order form-control" onChange = {GetOrder}>
            <option value="1">Ascendente</option>
            <option value="0">Descendente</option>
          </select>
        </div>
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
    {
    (masks === null || masks === [] || masks.length === 0) ?
      <div className="container emptyMessage">
        <div className="card text-center mt-5 mx-auto">
          <div className="card-header">
            Gráfica de Mascarillas por Fecha de Entrega
          </div>
          <div className="card-body">
            <p className="card-text">En las fechas seleccionadas no se han entregado mascarillas!</p>
            <p>Intente ingresando otras fechas</p>
          </div>
          <div className="card-footer text-muted">
          </div>
        </div>
      </div> 
          
    :
        <div>
          <ReactFC legendBgAlpha='0' canvasBgAlpha='0' className="text-center mt-5" {...chartGivenMasksConfigs}/>
          <ReactFC legendBgAlpha='0' canvasBgAlpha='0' className="text-center mt-5" {...chartGivenMasksPieConfigs}/>
        </div>
    }
    </div>
  )
}

export default MasksChart;