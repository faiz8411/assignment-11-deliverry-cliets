import Dropdown from '@restart/ui/esm/Dropdown';
import React, { useState, useEffect } from 'react';
import { DropdownButton, Table } from "react-bootstrap";
import { useForm } from 'react-hook-form';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    const [status, setStatus] = useState("");

    console.log(status);
    useEffect(() => {
        fetch("https://fast-eyrie-50144.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);




    const handleStatus = (e) => {
        setStatus(e.target.value);

    };



    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://fast-eyrie-50144.herokuapp.com//updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    return (
        <div className="container">


            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <td>
                                    <input
                                        onChange={handleStatus}
                                        type="text"
                                        defaultValue={pd.status}
                                    />
                                </td>

                                <button
                                    onClick={() => handleUpdate(pd._id)}
                                    className="btn bg-success p-2"
                                >
                                    Update
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageOrders;