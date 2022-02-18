import React from 'react'
import kike_product from '../../../static/images/product.png';
import ProductCard from '../../../__modules__/_cards/ProductCard';

interface IProps {
    label?: any
}

const LatestProduct = ({label}:IProps) => {
    return (
        <div>
            <div className='my-20 px-20  bg-black text-white h-96 xsm:h-fit sm:h-fit rounded-3xl mx-40 lg:mx-20 lg:px-10 md:mx-10 md:px-5 xsm:px-5 sm:px-5 xsm:mx-5 sm:mx-5'>
                <div className='py-10 flex flex-row justify-around font-OpenSans xsm:flex-col sm:flex-col xsm:py-5 sm:py-5'>
                    <p className='xsm:pb-5 sm:pb-5'>
                        <span className='font-OpenSans font-bold'>
                            Latest Products
                        </span>
                    </p>
                    {label}
                    <p className='xsm:hidden sm:hidden'>Default sorting</p>
                </div>
                <ProductCard
                    image_url={kike_product}
                    price='$25'
                    description={{
                        name: 'sandals',
                        colors: []
                    }}
                    count={3}
                    className={'grid grid-cols-3 gap-8 justify-center xsm:flex xsm:flex-col sm:flex sm:flex-col'}
                />
            </div>
        </div>
    );
}

export default LatestProduct;
