import React from 'react'
import kike_product from '../../../static/images/product.png';
import ProductCard from '../../../__modules__/_cards/ProductCard';

interface IProps {
    label?: any
}

const LatestProduct = ({label}:IProps) => {
    return (
        <div>
            <div className='my-20 px-20  bg-black text-white h-96 rounded-3xl mx-40'>
                <div className='py-10 flex flex-row justify-around font-OpenSans'>
                    <p>
                        <span className='font-OpenSans font-bold'>
                            Latest Products
                        </span>
                    </p>
                    {label}
                    <p>Default sorting</p>
                </div>
                <ProductCard
                    image_url={kike_product}
                    price='$25'
                    description={{
                        name: 'sandals',
                        colors: []
                    }}
                    count={3}
                    className={'grid grid-cols-3 gap-8 justify-center'}
                />
            </div>
        </div>
    );
}

export default LatestProduct;
