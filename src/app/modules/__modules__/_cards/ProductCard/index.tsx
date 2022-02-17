import React from 'react';
import ShoppingBagVector from '../../_vectors/shoppingBagVector';
import OutMapVector from '../../_vectors/outMapVector';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../../../../redux';


interface Props {
    image_url: string,
    description: {
        name: string,
        colors?: string[]
    },
    price: string,
    count: number // is provisoir
    className: string
};

const ProductCard = ({
    image_url,
    price,
    description,
    count,
    className
}: Props) => {

    const dispatch = useDispatch();
    const { toggleZoom } = bindActionCreators(actionsCreators, dispatch);

    const countArray = Array.from(Array(count).keys());

    return (
        <div className={className}>
            {countArray.map((index) => {
                return (
                    <div key={`${index}_${price}`} className='bg-white mb-20 shadow-xl rounded-xl text-black'>
                        <div className='flex flex-row justify-between'>
                            <OutMapVector
                                className='w-12 h-12 px-3 py-3 ml-5 mt-5 rounded-full border border-gray-300 cursor-pointer'
                                onClick={() => { toggleZoom(true) }}
                            />
                            <ShoppingBagVector className='w-12 h-12 px-3 py-3 mr-5 mt-5 rounded-full border border-gray-300 cursor-pointer' />
                        </div>
                        <div className='flex  justify-center'>
                            <img src={image_url} alt='product' className='z-10' />
                        </div>
                        <p className='text-center font-OpenSans font-bold'>{description.name}</p>
                        <p className='text-center py-5 font-OpenSans'>{price}</p>
                    </div>
                )
            })
            }
        </div>
    );
}
export default ProductCard;