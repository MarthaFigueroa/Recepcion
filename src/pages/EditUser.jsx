import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../public/css/global.css';
import NavBar from '../components/NavBar.jsx'
import SideBar from '../components/Forms/sideBar.jsx'
import Form from '../components/Usuarios/editUserForm.jsx'

const editPrestamo = () => {
    
    // const router = useRouter();

    return(
        <div>
            <NavBar />
            <div className="container d-flex font-poppins my-5">
                <div className="card container text-center px-0 py-0 my-5">
                    <div className="container text-center alertCont" key="alertCont">
                        {/*  style="border: none !important; box-shadow: none !important;" */}
                        <div className="row"> 
                            <div className="col-md-4 order-md-0 order-lg-0">
                                <SideBar />
                            </div>
                            <div className="col-md-8 mt-4 pb-3">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        
        </div>
        )
}

export default editPrestamo;