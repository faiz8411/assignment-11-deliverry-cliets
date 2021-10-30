import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Popular from '../Populer/Popular';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Popular></Popular>
        </div>
    );
};

export default Home;