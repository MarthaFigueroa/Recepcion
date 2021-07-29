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

const ObjectsChart = () => {
  const [objeto, setObject] = useState([]);

  useEffect(async() => {
    let response = await axiosBaseURL.get('/list_objects');
    setObject(() => response.data.data);
    console.log("Bar Data:", response.data.data);
  }, [])

const chartData = objeto.map( (objeto) => (
  {
    "label": objeto.objeto,
    "value": objeto.cantidad
  }
))
  
const barChartConfigs = {
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

const pieChartConfigs = {
  type: "pie3d", 
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

  return (
    <div>
      <ReactFC legendBgAlpha='0' canvasBgAlpha='0' className="text-center mt-5" {...barChartConfigs}/>
      <ReactFC legendBgAlpha='0' canvasBgAlpha='0' className="text-center mt-5" {...pieChartConfigs}/>
    </div>
  )
}

export default ObjectsChart;