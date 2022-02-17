import React from 'react'
import Menu from './Menu';
// import ShoppingBagVector from '../../../__modules__/_vectors/shoppingBagVector';
import kike_logo from '../../../static/images/kike_logo.png';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    const reload = () => {
        history.push('/');
    }
    return (
        <div className='flex flex-row justify-around items-center px-40'>
            <img src={kike_logo} alt='kike-logo' className='w-20 cursor-pointer' onClick={reload}/>
            <Menu />
            <button className='bg-black text-white px-10 py-2 rounded-md font-OpenSans'>Register</button>
            {/* <div className='flex flex-row justify-between items-center'>
                <p className='px-5 font-OpenSans font-extrabold'>$190</p>
                <ShoppingBagVector className='w-10'/>
            </div> */}
        </div>
    );
}

export default NavBar;

