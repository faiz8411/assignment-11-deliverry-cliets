import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-eyrie-50144.herokuapp.com/allservices')
            .then((res) => res.json())
            .then((result) => setServices(result));


    }, [])
    return (
        <div className='p-3'>
            <div className='service-provide'>
                <h6 className='text'>what we serve</h6>
                <h1>We Provide Top Destination <br /> specially for you</h1>
            </div>
            <div className='service'>
                <div className="row container">

                    {
                        services.map(pd => (<div className='col-md-4 col-sm-12'>
                            <div className="service border border p-3 ">
                                <div className="images">
                                    <img className='img-fluid' src={pd.image} alt="" />

                                </div>
                                <h6 className='description'>{pd.name}</h6>

                                <p className=' description-project'><span className='text-primary'></span> <br /> {pd.description}</p>
                                <h6 className='price'>price:${pd.price}</h6>
                                <Link to={`/details/${pd._id}`}><button className='p-2 border-0 bg-primary rounded text-white price'>Booking Now</button></Link>
                            </div>

                        </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default Services;