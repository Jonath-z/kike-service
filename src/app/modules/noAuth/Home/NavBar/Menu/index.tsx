import React from 'react';
import { useHistory } from 'react-router-dom';
import useResponsive from '../../../../hooks/useResponsive'

interface IProps{
    flexDirection: any
}

export const Menu = ({ flexDirection }: IProps) => {
    
    const history = useHistory();
    const isMobile = useResponsive();

    const getShop = () => {
        history.push('/shop');
    }
    const getHome = () => {
        history.push('/');
    }

    return (
        <div className={`flex ${flexDirection} justify-between items-center font-OpenSans font-extrabold`}>
            <p className='px-10 cursor-pointer md:px-5 xsm:py-5 sm:py-5' onClick={getHome}>Home</p>
            <p className='px-10 cursor-pointer md:px-5 xsm:py-5 sm:py-5' onClick={getShop}>Shop</p>
            <p className='px-10 cursor-pointer md:px-5 xsm:py-5 sm:py-5' ><a href='#footer'>About us</a></p>
            <p className='px-10 cursor-pointer md:px-5 xsm:py-5 sm:py-5'><a href='#footer'>Contacts</a></p>
            {
                isMobile[0] &&
                <button
                    className='bg-white text-black px-10 py-2 rounded-md font-OpenSans'
                >
                    Register
                </button>
            }
        </div>
    );
}

export default Menu;