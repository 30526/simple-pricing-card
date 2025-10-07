import React, { use } from 'react';
import PricingCard from '../pricing/pricingCard';


const PricingSection = ({ getPromise }) => {
    const pricingData = use(getPromise)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-20 mb-20'>
            {
                pricingData.map((pricing, index) =>
                    <PricingCard key={index} pricing={pricing}></PricingCard>)
            }
        </div>
    );
};

export default PricingSection;