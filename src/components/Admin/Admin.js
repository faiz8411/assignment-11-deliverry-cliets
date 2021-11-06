import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import Services from '../Services/Services';
import './Admin.css'

const Admin = () => {
    const [control, setControl] = useState("addServices");

    return (
        <div>
            <div className="side-menu">
                <div className="company-name">
                    <div className="row">
                        <div className="col-md-4 dasborad">
                            <h3>DSL LTD dashboard</h3>
                            <li
                                onClick={() => setControl("addServices")}
                                className="admin-menu p-2"
                            >
                                Add Services
                            </li>

                            <li
                                onClick={() => setControl("services")}
                                className="admin-menu p-2"
                            >
                                Manage Services
                            </li>
                            <li
                                onClick={() => setControl("MangeOrder")}
                                className="admin-menu p-2"
                            >
                                Manage Orders
                            </li>


                        </div>
                        <div className="col-md-8">
                            <div className="col-md-9 text-center  text-center">
                                <h1>see your productivity</h1>

                                {control === "services" && <Services></Services>}
                                {/* {control === "MangeOrder" && <MangeOrder></MangeOrder>} */}
                                {control === "addServices" && <AddService></AddService>}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Admin;