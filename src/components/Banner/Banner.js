import React from 'react';
import { useForm } from 'react-hook-form';
import './Banner.css'


const Banner = () => {

    return (
        <div className="banner-container">
            <div className="row">

                <div className="banner-text">
                    <div className="">
                        <h2 className="text">Delivery Solution logistics services cover <br /> 64 districts and 493 <br /> upazilas across the country</h2>
                        <p className="text-p">We guarantee the fastest service nationwide for any of your logistics needs</p>
                        <button className="btn btn-success">see coverage area</button>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://i.ibb.co/rwNBJzD/bangladash-map-svg.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;