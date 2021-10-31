import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-eyrie-50144.herokuapp.com/services')
            .then((res) => res.json())
            .then((result) => setServices(result));


    }, [])
    return (
        <div>
            <div className="service-container">

                <h1>our main service</h1>

                <div className="row container text-center">
                    {services?.map((service, index) => (
                        <div className="col-md-4">
                            <div className="event border border">
                                <div className="event-img">
                                    <img className="w-100" src={service.image} alt="" />
                                </div>
                                <div
                                    style={{ backgroundColor: service?.EventColor }}
                                    className="title-container p-2 "
                                    service={service}
                                >
                                    <h4>{service.title}</h4>
                                    {/* <h5>{pd.description
                                    }</h5> */}
                                    <Link to={`/details/${service._id}`}><button className="btn btn-success">Booking</button></Link>


                                    {/* /* <Link to={`/details/${service._id}`}><button>Add To My cart</button></Link> */}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;