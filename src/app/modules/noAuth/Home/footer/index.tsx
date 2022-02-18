import React from 'react';
import InstagramVector from '../../../__modules__/_vectors/instagramVector';

const Footer = () => {
    return (
        <div
            className='grid grid-cols-3 justify-center 
                       items-center gap-10 px-44 py-10 mt-52
                     bg-black text-white font-OpenSans
                       md:px-16 xsm:flex xsm:flex-col 
                       sm:flex sm:flex-col xsm:px-5 sm:px-5'
            id='footer'
        >
            <div className='flex flex-col justify-center items-center'>
                <p className='py-5 text-3xl'>About us</p>
                <p className='text-center'>
                    We are a company spacialized on woman's shoes<br className='lg:hidden'/>
                    selling, we are based in Goma (DRC).<br className='lg:hidden'/>
                    we sell best product and <br className='lg:hidden'/> we provide a good service
                    to our clients.<br className='lg:hidden'/>

                    Get our product in the <span className='text-red-500 font-bolg'><a href='/shop'>shop</a></span>
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='py-5 text-3xl'>Contacts</p>
                <p className='py-2'><a href='tel:+243997219984'>+243 997 219 984</a></p>
                <p className='py-2'><a href='mailto:kike@gmail.com'>kike@gmail.com</a></p>
                <a href='https://www.instagram.com/goma_tout_achat/' className='py-2 flex items-center'>
                    <InstagramVector className='text-2xl' />
                    <span className='px-2 text-gray-500'>goma_tout_achat</span>
                </a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='py-5 text-3xl'>Navigation</p>
                <p className='px-10 cursor-pointer py-2'><a href='/'>Home</a></p>
                <p className='px-10 cursor-pointern py-2'><a href='/shop'>Shop</a></p>
                <p className='px-10 cursor-pointer py-2'>Contacts</p>
            </div>
        </div>
    );
}

export default Footer;