import React from 'react';
import NavBar from '../Home/NavBar';
import LatestProduct from '../Home/LatestProducts';
import Footer from '../Home/footer';
import Products from './Products';
import { useSelector } from 'react-redux';
import Zoom from '../Zoom';

const ShopPage = () => {
    const productZoomed = useSelector((state: any) => state.toggleZoom);

    return (
        <div>
            <NavBar />
            <LatestProduct
                label={<p className='text-5xl font-OpenSans font-bold'>Shop</p>}
            />
            <Products />
            {productZoomed && <Zoom />}
            <Footer/>    
        </div>
    );
}

export default ShopPage;