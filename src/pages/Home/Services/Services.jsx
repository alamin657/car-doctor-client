// import { data } from 'react';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-alamin657.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className="text-2xl text-orange-600">Our Services</h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randoised words which don not look even slightly believable</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;