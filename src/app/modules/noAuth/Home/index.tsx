import React from 'react';
import NavBar from './NavBar';
import Presentation from './Presentation';
import LatestProduct from './LatestProducts';
import Footer from './footer';
import Zoom from '../Zoom';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const productZoomed = useSelector((state: any) => state.toogleZoom);
    console.log('is zoomed', productZoomed);
    return (
        <div>
            <NavBar />
            <Presentation />
            <LatestProduct
                label={
                    <p
                        className='bg-white text-black py-2 px-10 rounded-md font-OpenSans'
                    >
                        <a href='/shop'>
                            Go to Shop
                        </a>
                    </p>}
            />
            {productZoomed && <Zoom />}
            <Footer />
        </div>
    );
}

export default HomePage;