import { ProductCard } from '../components/ProductCard';
import { Product } from '../interfaces/interfaces';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

export const ShoppingPage = () => {
  const product: Product = {
    id: '1',
    title: 'coffee mug -card',
    img: './coffee-mug.png'
  };

  return (
    <div>
      <h4>Shopping Page</h4>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard product={product} className='bg-dark' style={{ backgroundColor: '#70d1f8' }}>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
