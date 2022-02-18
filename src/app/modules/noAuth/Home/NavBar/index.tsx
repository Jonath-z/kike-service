import React from 'react'
import Menu from './Menu';
// import ShoppingBagVector from '../../../__modules__/_vectors/shoppingBagVector';
import kike_logo from '../../../static/images/kike_logo.png';
import { useHistory } from 'react-router-dom';
import useResponsive from '../../../hooks/useResponsive';
import MobileMenu from '../../Mobile/MobileMenu';

const NavBar = () => {

    const history = useHistory();
    const isMobile = useResponsive();
 
    const reload = () => {
        history.push('/');
    }

    return (
        <div
            className='
            bg-white
            flex flex-row justify-around
            items-center px-40 lg:px-20
            md:px-5 sm:justify-between 
            xsm:justify-between sm:px-5 xsm:px-5 
            sm:fixed xsm:fixed 
            xsm:top-0 xsm:left-0 xsm:right-0
            sm:top-0 sm:left-0 sm:right-0 xsm:z-20 sm:z-20
            '
        >
            <img
                src={kike_logo}
                alt='kike-logo'
                className='w-20 cursor-pointer'
                onClick={reload}
            />
            {!isMobile[0] &&
                <Menu
                    flexDirection='flex-row'
                />
            }
            {isMobile[0] &&
                <MobileMenu /> 
            }
            <button
                className='bg-black text-white px-10 py-2 rounded-md font-OpenSans sm:hidden xsm:hidden'
            >
                Register
            </button>
            {/* <div className='flex flex-row justify-between items-center'>
                <p className='px-5 font-OpenSans font-extrabold'>$190</p>
                <ShoppingBagVector className='w-10'/>
            </div> */}
        </div>
    );
}

export default NavBar;

