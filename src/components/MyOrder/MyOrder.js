import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()

    const [myOrder, setMyOrder] = useState()
    const { id } = useParams()
    // const email = user?.email;
    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then((res) => res.json())
            .then((data) => {

                setMyOrder(data)
            });
        // const allOrder = orders.find(pd => pd.id === serviceId)
        // console.log(allOrder)

    }, [])
    console.log(setMyOrder)

    return (
        <div>
            <div className="row container text-center">
                {myOrder?.map((service, index) => (
                    <div className="col-md-4">
                        <div className="event border border">

                            <div

                            >
                                <h4>{myOrder.title}</h4>
                                {/* <h5>{pd.description
                                    }</h5> */}
                                <button>done</button>


                                {/* /* <Link to={`/details/${service._id}`}><button>Add To My cart</button></Link> */}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyOrder;