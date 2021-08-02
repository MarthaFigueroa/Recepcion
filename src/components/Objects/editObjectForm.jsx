import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import './../../public/css/global.css';
import { useState, useEffect } from "react";
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory, useParams } from 'react-router-dom'

const EditPrestamoForm = () => {
    
    const { id } = useParams();
    const history = useHistory();
    // let [importanceName, setImportanceSelected] = useState([])
    let [importanceName, setImportanceSelected] = useState("")
    let [categorieName, setCategorieSelected] = useState("")
    // let [userName, setUserSelected] = useState("")
    const [object, setObj] = useState(dataObject())

    const [categories, setcategories] = useState([]);
    const [users, setusers] = useState([]);
    const [importances, setimportance] = useState([]);

    // eslint-disable-next-line
    useEffect(async() => {
        let responseUsers = await axiosBaseURL.get('/list_users');
        let usersArr = [];
        // setusers(() => responseUsers.data.data);
        responseUsers.data.data.map( (user) => {
            if(user.habilitado === 1){
                usersArr.push(user);
                setusers(() => usersArr);
            }else if(user.habilitado === 0){
                console.log("GG");
            }
            return user;
        })

        let responseCategorie = await axiosBaseURL.get('/list_categories');
        let categoriesArr = [];
        responseCategorie.data.data.map( (categorie) => {
            if(categorie.activo === 1){
                console.log("Yes");
                categoriesArr.push(categorie);
                setcategories(() => categoriesArr);
            }else if(categorie.activo === 0){
                console.log("GG",categorie);
            }
            return categorie;
        })

        let responseImportance = await axiosBaseURL.get('/list_importance');
        setimportance(() => responseImportance.data.data);
        console.log("Data: ",responseImportance.data.data);

        console.log("Yes", usersArr);
        console.log("Yes Cat", categoriesArr);
    }, [])

    async function dataObject() {
        console.log("gg",id);
        const response = await axiosBaseURL.get(`/object_by_id/${id}`);
        return response.data.data[0];
    }

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log(id);
        const response = await axiosBaseURL.get(`/object_by_id/${id}`);
        setObj(response.data.data[0]);
        
        const responseCategorie = await axiosBaseURL.get(`/categorie_by_id/${response.data.data[0].id_categoria}`);
        console.log(responseCategorie.data.data[0]);
        await setCategorieSelected(responseCategorie.data.data[0]);

        const responseImportance = await axiosBaseURL.get(`/importance_by_id/${response.data.data[0].id_importancia}`);
        console.log(responseImportance.data.data[0]);
        await setImportanceSelected(responseImportance.data.data[0]);
    }, [])
    
    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values: "+JSON.stringify(values));
        console.log("Values gg: "+values.id_categoria);
        console.log("Values imp: "+values.id_importancia);
        console.log(id);
        const response = await axiosBaseURL.post(`/update_object/${id}`, values);
        console.log(response.data);

        history.push('/inventarioObjetos');
    }

    async function onSelectImportance(event) {
        const newValue = event.target.value;
        console.log("Value", newValue);
        const responseImportance = await axiosBaseURL.get(`/importance_by_id/${newValue}`);
        console.log(responseImportance.data.data[0]);
        await setImportanceSelected(responseImportance.data.data[0]);
        return importanceName;
    }

    async function onSelectCategorie(event) {
        const newValue = event.target.value;
        console.log("Value", newValue);
        const responseCategorie = await axiosBaseURL.get(`/categorie_by_id/${newValue}`);
        console.log(responseCategorie.data.data[0]);
        await setCategorieSelected(responseCategorie.data.data[0]);
        return categorieName;
    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    objeto: object.objeto,
                    descripcion: object.descripcion,
                    id_importancia: importanceName.id,
                    id_categoria: categorieName.id,
                    activo: 1,
                    cantidad:  object.cantidad,
                    usuario_modifico: object.usuario_modifico
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
            <Form className="form mx-5 px-5">
                <div className="form-row form-fields">
                    <label>Nombre del Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="objeto" key="objeto" placeholder="Objeto" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Descripción: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="text" name="descripcion" key="descripcion" placeholder="Descripción" required/>
                </div>
                <div className="form-row form-fields">
                    <label>Cantidad de Objetos: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field type="number" name="cantidad" key="cantidad" placeholder="Cantidad de Objetos" min="1" required/>
                </div>

                <div className="form-row form-fields">
                    <label>Nivel de Importancia: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field as="select" name="id_importancia" key="id_importancia" value={importanceName.id} onChange = {onSelectImportance}> 
                        {
                            importances.map( (importance) => (
                                <option key={importance.id} value={importance.id}>{importance.tipo}</option>
                            ))
                        }
                    </Field>
                </div>

                <div className="form-row form-fields">
                    <label>Categoría del Objeto: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field as="select" name="id_categoria" key="id_categoria" value={categorieName.id} onChange = {onSelectCategorie}> 
                        {
                            categories.map( (categorie) => (
                                <option key={categorie.id} value={categorie.id}>{categorie.categoria}</option>
                            ))
                        }
                    </Field>
                </div>
                <div className="form-row form-fields">
                    <label>Usuario que Modificó: </label>
                </div>
                <div className="form-row text-center form-fields">
                    <Field as="select" name="usuario_creo" key="usuario_creo"> 
                        {
                            users.map( (user) => (
                                <option key={user.id} value={user.id}>{user.usuario}</option>
                            ))
                        }
                    </Field>
                </div>
                {/* <div className="form-row text-center form-fields">
                    <Field type="text" name="usuario_modifico" key="usuario_modifico" placeholder="Usuario que Modificó" required/>  
                </div> */}
                <div className="form-row text-center form-fields">
                    <button className="btn btn-blue px-3 mx-auto" key="bot" disabled={isSubmitting}>Modificar Objeto</button>
                    <Link to="/inventarioObjetos" className="btn btn-blue px-3 mx-auto">Cancelar</Link>
                </div>
            </Form>
        )}
    </Formik>
    )
}

export default EditPrestamoForm;