import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()

    const [orders, setOrders] = useState([])
    const { id } = useParams()
    // const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then((res) => res.json())
            .then((data) => {

                setOrders(data)
            });
        // const allOrder = orders.find(pd => pd.id === serviceId)
        // console.log(allOrder)

    }, [id])
    console.log(orders)

    return (
        <div>
            <div>

                <h2>this is upadte</h2>
                <h2>{orders.firstName}</h2>
                {
                    orders?.map(order => {
                        <h1>{order?.title}</h1>

                    })
                }
                <h2>my order here</h2>



            </div>
        </div>
    );
};

export default MyOrder;