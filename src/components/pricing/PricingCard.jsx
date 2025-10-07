import React from 'react';
import Feature from './Feature';

const PricingCard = ({ pricing }) => {
    const { id, planName, price, description, features } = pricing
    return (
        <div className='p-4 rounded-xl bg-[#c2c2c21a] border-1 border-[#dbdbdb1a] flex flex-col'>
            <div>
                <h2 className='text-4xl mb-1'>{planName}</h2>
                <span className=''>BDT {price}</span>
            </div>
            <p className='my-4'>{description}</p>
            <p className='mt-4 mb-2 font-bold text-2xl'>Features</p>
            <div className=' bg-[#c2c2c21a] px-6 py-4 rounded-xl flex-1 mb-3'>
                {
                    features.map((feature, index) => <Feature
                        key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='btn w-full rounded-xl'>Subscribe Now</button>
        </div>
    );
};

export default PricingCard;