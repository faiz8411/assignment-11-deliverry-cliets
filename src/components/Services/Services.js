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
        <div>
            <Row xs={1} md={3} className="g-4">
                {services.map((pd, idx) => (
                    <Col>
                        <Card>
                            <Card.Img className="w-70" variant="top" src={pd.image} />
                            <Card.Body>
                                <Card.Title>{pd.name}</Card.Title>
                                <Card.Text>
                                    {pd.description}
                                </Card.Text>
                                <Card.Text>
                                    price: {pd.price}
                                </Card.Text>
                                <Link to={`/service/${pd._id}`}><button className="btn btn-success "> details</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Services;