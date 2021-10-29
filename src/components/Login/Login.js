import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register("firstName",)} />



                <input type="submit" className="m-2" />
            </form>

        </div>
    );
};

export default Login;