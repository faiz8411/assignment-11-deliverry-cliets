import React from 'react';
import { useForm } from 'react-hook-form';
import './Banner.css'


const Banner = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="banner-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Banner;