import React, { useState } from 'react';
import MenuVector from '../../../__modules__/_vectors/menuVector';
import Menu from '../../Home/NavBar/Menu';


const MobileMenu = () => {
    const [isSlideMenu, setIsSlideMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsSlideMenu(!isSlideMenu);
        console.log('is toggled');
    }

    return (
        <div>
            <MenuVector className='h-7 w-7' onClick={toggleMenu} />
            {isSlideMenu &&
                <div className='fixed right-3 top-20 bg-black text-white py-10 px-5 rounded-tl-md rounded-bl-md'>
                    <Menu
                        flexDirection={'flex-col'}
                    />
                </div>
            }
        </div>
    );
}

export default MobileMenu;