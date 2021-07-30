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

const DefectiveObjectsChart = () => {
  const [objeto, setObject] = useState([]);

  useEffect(async() => {
    const values = {
      "chart": 1
  }
    let response = await axiosBaseURL.patch('/list_defective_objects', values);
    setObject(() => response.data.data);
    console.log("Defective Objects Data:", response.data.data);
  }, [])

const chartData = objeto.map( (objeto) => (
  {
    "label": objeto.objeto,
    "value": objeto.defectuosos
  }
))
  
const barChartConfigs = {
  type: "column3d", 
  width: "800", 
  height: "500", 
  dataFormat: "json", 
  dataSource: {
    chart: {
      caption: "Inventario de Objetos Defectuosos",
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
      caption: "Inventario de Objetos Defectuosos",
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

export default DefectiveObjectsChart;