import React from 'react';
import OutLineHartVector from '../../_vectors/outLineHartVector';
import ShoppingBagVector from '../../_vectors/shoppingBagVector';
import CancelVector from '../../_vectors/cancelVector';
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
    className: string
    views: string[]
};

const ZoomCard = ({
    image_url,
    description,
    price,
    className,
    views
}: Props) => {

    const dispatch = useDispatch();
    const { toggleZoom} = bindActionCreators(actionsCreators, dispatch);

    return (
        <div className={className}>
            <CancelVector
                className='text-white h-7 w-7 cursor-pointer absolute top-10 right-10'
                onClick={()=>{toggleZoom(false)}}
            />
            <div className='bg-white flex flex-row shadow-xl rounded-md'>
                <div className='flex flex-col'>
                    <div className='grid grid-cols-2 gap-10 px-10'>
                        <img src={image_url} alt='product' />
                        <div>
                            {
                                views.map((view_url) => {
                                    return (
                                        <img src={view_url} alt='product-view' />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='bg-black text-white flex flex-row justify-around py-5 rounded-tr-md rounded-bl-md'>
                        <p className='font-Mulish font-bold'>{description.name}</p>
                        <p className='font-Mulish font-bold'>{price}</p>
                    </div>
                </div>
                <div className='px-10 py-5 flex flex-col justify-between'>
                    <ShoppingBagVector  className='border border-gray-400 py-2 px-2 w-12 h-12 rounded-full'/>
                    <OutLineHartVector className='border border-gray-400 py-2 px-2 w-12 h-12 rounded-full'/>
                </div>
            </div>
        </div>
    );
}

export default ZoomCard;