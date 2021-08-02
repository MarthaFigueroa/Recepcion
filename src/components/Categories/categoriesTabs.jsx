import React from 'react'
import { useState, useEffect } from "react";
import { axiosBaseURL } from '../../Config/axios.js';
import Table from '../Categories/categoriesTable.jsx'
import DisableCategoriesTable from '../Categories/disableCategoriesTable.jsx'
import DeletedCategoriesTable from '../Categories/deletedCategoriesTable.jsx'
import { Tabs } from 'react-bootstrap';

const ControlledTabs = () => { 
    const [categorie, setCategorie] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axiosBaseURL.get('/list_categories');
            response.data.data.map((categorie) => {
                let fecha = new Date(categorie.fecha_creo);
                const newHour = fecha.toLocaleTimeString();
                const arrHora = newHour.split(":");
                const arrFecha = categorie.fecha_creo.split("T");
                categorie.fecha_creo = arrFecha;
                categorie.fecha_creo[1] = arrHora[0]+":"+arrHora[1];
                
                if(categorie.fecha_elimino != null){
                    let fechaElimino = new Date(categorie.fecha_elimino);
                    const newHourE = fechaElimino.toLocaleTimeString();
                    const arrHoraE = newHourE.split(":");
                    const arrFechaE = categorie.fecha_elimino.split("T");
                    categorie.fecha_elimino = arrFechaE;
                    categorie.fecha_elimino[1] = arrHoraE[0]+":"+arrHoraE[1];
                }
                setCategorie(() => response.data.data);
                console.log("Data:", response.data.data);
                return categorie;
            });
        }
        fetchData();
            // return arrFecha;

    }, [])

    return (
        <Tabs id="controlled-tab-example">
            <Tabs eventKey="Categorias" title="Categorias">
                <Table categories={categorie}/>
            </Tabs>
            <Tabs eventKey="disableCategories" title="Categorias Deshabilitadas">
                <DisableCategoriesTable categories={categorie} />
            </Tabs>
            <Tabs eventKey="deletedCategories" title="Categorias Eliminados">
                <DeletedCategoriesTable categories={categorie} />
            </Tabs>
        </Tabs>
    );
}

export default ControlledTabs