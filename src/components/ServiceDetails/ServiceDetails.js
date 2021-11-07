import React, { useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { user } = useAuth()
    // const email = sessionStorage.getItem("email");
    const { serviceId } = useParams()
    const [details, setDetails] = useState({})

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        alert('your order successfully added in my order')
        data.status = "pending"
        fetch("https://fast-eyrie-50144.herokuapp.com/myOrders", {
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
        fetch(`https://fast-eyrie-50144.herokuapp.com/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])
    // const handleDelete = (id) => {

    //     fetch(`https://fast-eyrie-50144.herokuapp.com/deleteService/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(result => console.log(result))
    //     alert('are you want to delete')
    //     console.log(id)

    // }

    return (
        <div>
            <h1>THis is Booking</h1>

            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={details?.image} alt="" />
                        </div>
                        <h2>{details?.name}</h2>
                        <p className="text-start">{details?.description}</p>
                        <h1> price: {details?.price} $</h1>
                        <h1 className="text-danger"> price: {details?.model}</h1>
                    </div>
                    <div className="col-md-6">
                        <h1>booking Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                defaultValue={details?.name}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("email")}
                                defaultValue={user.email}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            <input
                                {...register("price", { required: true })}
                                defaultValue={details?.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={details?.image}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            <input
                                type="submit"
                                value="Order Now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;