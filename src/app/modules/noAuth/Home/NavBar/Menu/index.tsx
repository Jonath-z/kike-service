import React from 'react';
import { useHistory } from 'react-router-dom';

export const Menu = () => {
    const history = useHistory();
    const getShop = () => {
        history.push('/shop');
    }
    const getHome = () => {
        history.push('/');
    }
    return (
        <div className='flex flex-row justify-between items-center font-OpenSans font-extrabold'>
            <p className='px-10 cursor-pointer'onClick={getHome}>Home</p>
            <p className='px-10 cursor-pointer' onClick={getShop}>Shop</p>
            <p className='px-10 cursor-pointer' ><a href='#footer'>About us</a></p>
            <p className='px-10 cursor-pointer'><a href='#footer'>Contacts</a></p>
        </div>
    );
}

export default Menu;