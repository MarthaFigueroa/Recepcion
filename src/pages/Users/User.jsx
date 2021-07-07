import React from 'react'
import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/sideBar.jsx'
import Tabs from '../../components/Usuarios/userTabs.jsx'

const User = () =>{   

    // const [usuarios, setusuarios] = useState([]);
    // eslint-disable-next-line
    // useEffect(async() => {
    //     let response = await axiosBaseURL.get('/list_users');
    //     setusuarios(() => response.data.data);
    //     console.log("Data:", response.data.data);
    // }, [])

    return (
        <div>
            <NavBar />
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 container">
                        <Tabs/>
                        {/* <Table usuarios={usuarios} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;