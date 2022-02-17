import React from 'react';
import ZoomCard from '../../__modules__/_cards/ZoomCard';
import kike_product from '../../static/images/product.png'

const Zoom = () => {
    return (
        <div>
            <ZoomCard
                image_url={kike_product}
                description={{
                    name: 'sandals',
                }}
                price={'$25'}
                className={''}
                views={[kike_product, kike_product]}
            />
        </div>
    );
}

export default Zoom;