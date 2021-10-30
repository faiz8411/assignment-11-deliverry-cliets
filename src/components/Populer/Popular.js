import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Popular.css'



const Popular = () => {
    return (
        <div>
            <h2>OUR POPULER SERVICE BY OFFERD</h2>
            <CardGroup className="container-popular">
                <Card>
                    <Card.Img variant="top" className="images" src="https://i.ibb.co/T25sMmr/best-cod-rates-svg.jpg" />
                    <Card.Body>
                        <Card.Title>Best Cash On Delivery Rate</Card.Title>
                        <Card.Text>
                            Cash on delivery charge 0% inside Dhaka, 1% outside Dhaka
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" className="images-width" src="https://i.ibb.co/tMz7r0C/doorstep-pickup-delivery-svg.jpg" />
                    <Card.Body>
                        <Card.Title>Doorstep pickup and delivery</Card.Title>
                        <Card.Text>
                            The parcel will reach the desired destination from your door without any hindrance
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" className="images" src="https://i.ibb.co/zG14hJp/fastest-delivery-svg.jpg" />
                    <Card.Body>
                        <Card.Title>Delivery guaranteed in 3 days</Card.Title>
                        <Card.Text>
                            Guarantee of parcel delivery to any part of Bangladesh in just 3 days
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" className="images" src="https://i.ibb.co/fkjqLmZ/next-day-payment-svg.jpg" />
                    <Card.Body>
                        <Card.Title>Payment the next day</Card.Title>
                        <Card.Text>
                            Once the delivery is complete, you will receive the payment the next day
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" className="images" src="https://i.ibb.co/mbMRBwV/secure-handling-svg.jpg" />
                    <Card.Body>
                        <Card.Title>Secure handling</Card.Title>
                        <Card.Text>
                            Maximum secure shipment assurance and compensation facility
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" className="images" src="https://i.ibb.co/7SdqZph/sms-update-svg-1.jpg" />
                    <Card.Body>
                        <Card.Title>SMS update </Card.Title>
                        <Card.Text>
                            You will receive SMS updates to your registered mobile number during parcel booking and delivery
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Popular;