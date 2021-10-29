import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((result) => setServices(result));


    }, [])
    return (
        <div>
            <div>

                <h1>services {services.length}</h1>
                <div className="all-products">
                    <div className="row container text-center">
                        {services.map((pd, index) => (
                            <div className="col-md-4">
                                <div className="event border border">
                                    <div className="event-img">
                                        <img className="w-100" src={pd.image} alt="" />
                                    </div>
                                    <div
                                        style={{ backgroundColor: pd?.EventColor }}
                                        className="title-container p-2 "
                                    >
                                        <h4>{pd.title}</h4>
                                        {/* <h5>{pd.description
                                        }</h5> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;