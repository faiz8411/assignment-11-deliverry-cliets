import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-eyrie-50144.herokuapp.com/allservices')
            .then((res) => res.json())
            .then((result) => setServices(result));


    }, [])
    return (
        <div>
            <h1>Services</h1>
            <div className="services">
                <div className="row container">
                    {services?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4 h-50">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <img className="img-fluid" src={pd?.image} alt="" />
                                </div>
                                <h5>{pd.name}</h5>
                                <p>{pd.description}</p>
                                <p>price:{pd.price}</p>
                                <Link to={`/services/${pd._id}`}>

                                    <button className="btn btn-success">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;