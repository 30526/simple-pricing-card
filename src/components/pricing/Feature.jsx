import { CheckCheck } from 'lucide-react';
import React from 'react';

const Feature = ({ feature }) => {
    return (
        <div>
            <h3 className='my-3 flex gap-3'><CheckCheck></CheckCheck> {feature}</h3>
        </div>
    );
};

export default Feature;