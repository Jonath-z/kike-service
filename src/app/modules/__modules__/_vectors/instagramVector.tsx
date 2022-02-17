import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { classNameInterface } from '../../types';

const InstagramVector = ({className}:classNameInterface) => {
    return (
        <AiFillInstagram className={className} />
    );
}

export default InstagramVector;