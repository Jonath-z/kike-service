import React from 'react';
import NavBar from '../Home/NavBar';
import LatestProduct from '../Home/LatestProducts';
import Footer from '../Home/footer';
import Products from './Products';

const ShopPage = () => {
    return (
        <div>
            <NavBar />
            <LatestProduct
                label={<p className='text-5xl font-OpenSans font-bold'>Shop</p>}
            />
            <Products/>
            <Footer/>    
        </div>
    );
}

export default ShopPage;