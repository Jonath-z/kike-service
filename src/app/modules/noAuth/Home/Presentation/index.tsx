import React from 'react';
import kike_presentation from '../../../static/images/kike-presentation.png'

const Presentation = () => {
    return (
        <div className='flex flex-row justify-between pt-20 rounded-xl sm:block xsm:block xsm:pt-5 sm:pt-5'>
            <div>
                <h1 className='font-OpenSans'>
                    <b className='text-[500px] lg:text-[300px] md:text-[200px] xsm:text-[200px] sm:text-[300px]' style={{
                        textShadow: '5px 2px #FF0000'
                    }}>Ki</b>
                    <span className='text-[200px] md:text-[100px] xsm:text-[100px] sm:text-[100px] text-gray-500'>Ke</span>
                </h1>
                <p className='px-10 -mt-40 font-Mulish lg:-mt-20 md:-mt-16 md:px-5 md:text-sm xsm:-mt-16 sm:-mt-20 xsm:px-5 sm:px-5'>Make your order safely and get the best product.</p>
            </div>
            <div className='bg-black rounded-tl-full xsm:hidden sm:hidden'>
                <img src={kike_presentation} alt='presentation' />
            </div>
        </div>
    );
}

export default Presentation;