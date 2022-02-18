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
                className={'bg-black bg-opacity-90 z-30 fixed  top-0 bottom-0 left-0 right-0 flex justify-center items-center'}
                views={[kike_product, kike_product]}
            />
        </div>
    );
}

export default Zoom;