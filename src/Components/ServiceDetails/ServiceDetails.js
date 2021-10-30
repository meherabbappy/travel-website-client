import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import axios from 'axios';

import "./ServiceDetails.css"
import Orderform from '../Orderform/Orderform';



const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    })


    return (
        <div>


            <div className="d-flex justify-content-center ser-details">

                <div className="card m-3 " style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="">
                            <img src={service.img} className="w-100 rounded-start" alt="..." />
                        </div>
                        <div className="">
                            <div className="card-body bb">
                                <h3 className="card-title">Name: {service.name}</h3>

                                <h4 className="card-text"><b>Visiting Fee: </b> <i> {service.visit}</i></h4>
                                <p className="card-text"> {service.description}</p>
                                <Link to="/home"><button className="btn btn-primary">Go Home</button></Link>
                                <Orderform></Orderform>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* place order */}
            {/* 
            <div className="my-4">
                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2 p-2" {...register("Address", { required: true, maxLength: 20 })} placeholder="Address" />
                    <br />
                    <input className="p-2" type="number" {...register("phone", { min: 11, max: 11 })} placeholder="Phone" value="Phone" />
                    <br />
                    <input className="btn btn-dark my-2" type="submit" value="Place Order" />
                </form>
            </div> */}





        </div>
    );
};

export default ServiceDetails;