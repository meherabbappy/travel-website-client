import React, { useEffect, useState } from 'react';
import { Button, Spinner, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gentle-beach-61220.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>


            {services.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :

                <div id="services" className="container">
                    <h2 className="text-dark fw-bold my-4 text-center">Our All Services</h2>
                    <div className="service-container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                services.map(service => <Service
                                    key={service.id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default Services;


