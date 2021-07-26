import FusionCharts from "fusioncharts";
import Pie2D from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import { useState, useEffect } from "react";
import './../../public/css/global.css';
import { axiosBaseURL } from '../../Config/axios.js';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

const PieChart = () => {

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
      console.log("Bar Data:", response.data.data);
    }, [])

    const dataSource = {
        chart: {
          caption: "Market Share of Web Servers",
          plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
          showlegend: "1",
          showpercentvalues: "1",
          legendposition: "bottom",
          usedataplotcolorforlabels: "1",
          theme: "fusion"
        },
        data: [
          {
            label: "Apache",
            value: "32647479"
          },
          {
            label: "Microsoft",
            value: "22100932"
          },
          {
            label: "Zeus",
            value: "14376"
          },
          {
            label: "Other",
            value: "18674221"
          }
        ]
      };

    const chartData = objeto.map( (objeto) => (
        {
          "label": objeto.objeto,
          "value": objeto.cantidad
        }
    ))

    const chartConfigs = {
        type: "pie3d", 
        width: "800", 
        height: "500", 
        dataFormat: "json", 
        dataSource: {
          chart: {
            caption: "Inventario de Objetos",
            xAxisName: "Nombre del Objeto",
            yAxisName: "Cantidad",
            numberSuffix: "u",
            theme: "candy"
          },
          data: chartData
        }
      };

    return (
        <ReactFC className="text-center mt-5" {...chartConfigs} />
    );
}

export default PieChart;
