import React from 'react';
import kike_presentation from '../../../static/images/kike-presentation.png'

const Presentation = () => {
    return (
        <div className='flex flex-row justify-between pt-20 rounded-xl h-screen'>
            <div>
                <h1 className='font-OpenSans'>
                    <b className='text-[500px]' style={{
                        textShadow: '5px 2px #FF0000'
                    }}>Ki</b>
                    <span className='text-[200px] text-gray-500'>Ke</span>
                </h1>
                <p className='px-10 -mt-40 font-Mulish'>Make your order safely and get the best product.</p>
            </div>
            <div className='bg-black rounded-tl-full'>
                <img src={kike_presentation} alt='presentation' className='w-auto h-full' />
            </div>
        </div>
    );
}

export default Presentation;