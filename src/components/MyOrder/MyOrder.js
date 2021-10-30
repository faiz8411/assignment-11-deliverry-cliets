import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState({})
    const { serviceId } = useParams()
    // const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/single/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>

            <h4>this is my order {orders.title
            }</h4>
            <small>{serviceId}</small>
            <div>
                <img src={orders.title} alt="" />
            </div>
        </div>
    );
};

export default MyOrder;