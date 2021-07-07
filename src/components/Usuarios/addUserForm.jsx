import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../../public/css/global.css';
import { Formik, Form, Field } from 'formik';
import { axiosBaseURL } from "../../Config/axios.js"
import { Link, useHistory } from 'react-router-dom'


const AddUserForm = () => {
    
    const history = useHistory();

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        console.log("Values", JSON.stringify(values));
        const response = await axiosBaseURL.post("/add_user", values);
        //setSubmitting(false);
        console.log(response.data.data);

        history.push('/usuario');
        
        // router.push("/libros")

    }

    return(
        <Formik
                enableReinitialize="true"
                initialValues={{
                    nombres: "",
                    apellidos: "",
                    email: "",
                    id_rol: "",
                    usuario: "",
                    usuario_creo: "",
                    session_time: "",
                    pswd: ""
                }}
                onSubmit={handleRegisterSubmit}
            >
            {({ isSubmitting }) => (
                <Form name="form1">
                    <div className="form-row form-fields">
                        <Field className="col-md-5 dateInput" type="text" key="nombres" name="nombres" placeholder="Nombres"required/>
                        <Field className="col-md-5 dateInput" type="text" name="apellidos" key="apellidos" placeholder="Apellidos"required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="id_rol" key="id_rol" placeholder="Rol" required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="usuario" key="usuario" placeholder="Usuario" required/>
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="email" key="email" placeholder="Email" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="password" name="pswd" key="pswd" placeholder="Password" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="usuario_creo" key="usuario_creo" placeholder="Usuario que lo crea" required/>  
                    </div>
                    <div className="form-row form-fields">
                        <Field type="text" name="session_time" key="session_time" placeholder="Tiempo de Sesión" required/>  
                    </div>
                    <button className="btn btn-blue px-3" key="bot" disabled={isSubmitting}>Crear Usuario</button>
                    <Link to="/usuario" className="btn btn-blue px-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

export default AddUserForm;