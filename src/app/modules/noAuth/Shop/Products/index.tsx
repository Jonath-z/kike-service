import ProductCard from '../../../__modules__/_cards/ProductCard';
import kike_product from '../../../static/images/product.png';

const Products = () => {
    return (
        <div className='px-56 mt-44 lg:px-20 md:px-10 xsm:px-5 sm:px-5'> 
            <ProductCard
                image_url={kike_product}
                price='$25'
                description={{
                    name: 'sandals',
                    colors: []
                }}
                count={6}
                className={'grid grid-cols-3 gap-8 justify-center xsm:flex xsm:flex-col sm:flex sm:flex-col'}
            />
        </div>
    );
}

export default Products;