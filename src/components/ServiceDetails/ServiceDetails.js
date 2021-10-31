import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { user } = useAuth()
    const { serviceId } = useParams()
    const [details, setDetails] = useState({})

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/addMyOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset()

    }




    useEffect(() => {
        fetch(`http://localhost:5000/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])


    return (
        <div>
            <h2>details of:  {details.title}</h2>



            <div className="row d-flex">
                <div className="col-md-6">
                    <img src={details.image} alt="" />

                </div>
                <div className="col-md-6">
                    <h4>{details.title}</h4>
                    <p>{details.description}</p>
                    <h2>booking for services</h2>

                    <Link to={`/myorder/${details._id}`}>
                        <button>conferm</button>
                    </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input type="number" {...register("age", { min: 18, max: 99 })} />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default ServiceDetails;