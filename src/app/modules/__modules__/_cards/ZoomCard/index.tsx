import React from 'react';
import OutLineHartVector from '../../_vectors/outLineHartVector';
import ShoppingBagVector from '../../_vectors/shoppingBagVector';

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
}:Props) => {
    return (
        <div className={className}>
            <div>
                <img src={image_url} alt='product' />
                <div>
                    {
                        views.map((view_url) => {
                            return (
                                <img src={view_url} alt='product-view'/>
                            )
                        })
                    }
                </div>
                <div>
                    <p>{description.name}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div>
                <ShoppingBagVector />
                <OutLineHartVector/>
            </div>
        </div>
    );
}

export default ZoomCard;