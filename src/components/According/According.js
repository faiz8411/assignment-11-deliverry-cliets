import React from 'react';
import { Accordion } from 'react-bootstrap';
import './According.css'

const According = () => {
    return (
        <div className="mb-2">
            <h1>All your questions</h1>
            <h4>See the most asked questions, we are by your side in any need</h4>
            <Accordion className="according-container m-2" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h4>What is Delivery Solution LTD??</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        Delivery solution LTD is a technology-based logistics company that provides industrial logistics services across the country, ranging from SME product delivery services to personal documents, parcel delivery, and large corporate companies.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h4>What kind of services does DSL offer?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        RedX is a complete platform for providing delivery services for any business or personal needs. RedX also provides parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics solution as a service and customized solution as required
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h4>Want to know about your logistics charges??</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        We charge merchants for parcel delivery at Rs 60 per kg inside Dhaka, Rs 100 per kg inside Dhaka, Rs 100 per kg around Dhaka and Rs 130 per kg outside Dhaka. 1% cash on delivery charge is applicable for every delivery in and around Dhaka.

                        See our Home Delivery and Hub Delivery Price Chart for personal parcel shipping charges.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default According;