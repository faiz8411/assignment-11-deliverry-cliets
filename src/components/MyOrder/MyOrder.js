import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()




    const [orders, setOrders] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://fast-eyrie-50144.herokuapp.com/myOrders?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);
    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`https://fast-eyrie-50144.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };

    return (
        <div>
            <h1>My orders </h1>

            <div className="services">
                <div className="row container">
                    {orders?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h4>{pd?.model}</h4>
                                <p>{pd?.description}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;