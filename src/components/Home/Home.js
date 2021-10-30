import React, { useEffect, useState } from 'react';
import According from '../According/According';
import Banner from '../Banner/Banner';
import Popular from '../Populer/Popular';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Popular></Popular>
            <According></According>
        </div>
    );
};

export default Home;