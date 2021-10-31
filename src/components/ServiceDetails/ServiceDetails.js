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
    const { serviceId } = useParams()
    const [details, setDetails] = useState([])

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.status = "pending"
        fetch("http://localhost:5000/addMyOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('product added in my order')
        console.log(data);
        reset()

    }




    useEffect(() => {
        fetch(`http://localhost:5000/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])
    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => console.log(result))
        alert('are you want to delete')
        console.log(id)

    }

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
                    <div className="event-box border border d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.email}
                                    {...register("title")}
                                    placeholder="title"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <textarea defaultValue={details.description}
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input defaultValue={user.email}
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />



                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" value="confirm" className="btn btn-info w-50" />

                            </form>
                            <button className="btn btn-danger m-2" onClick={() => handleDelete(details._id)}>Delete</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;