import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, description, price } = service
    return (
        <div>
            {/* <Col>
                <Card>
                    <Card.Img className="w-70" variant="top" src={service.image} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                        <Card.Text>
                            price: {service.price}
                        </Card.Text>
                        <Link to={`/service/${service._id}`}><button className="btn btn-success "> details</button></Link>
                    </Card.Body>
                </Card>
            </Col> */}
        </div>
    );
};

export default Service;