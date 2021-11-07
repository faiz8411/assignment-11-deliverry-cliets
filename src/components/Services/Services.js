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
        <div className="p-3">
            <h1> Services</h1>
            <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h4>{pd?.model}</h4>
                                <p>{pd?.description}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                <Link to={`/details/${pd._id}`}>
                                    <button className="btn btn-success">Add To Cart</button>
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