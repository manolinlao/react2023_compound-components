import { ProductCard } from '../components/ProductCard';
import { Product } from '../interfaces/interfaces';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css';

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const product1: Product = {
    id: '1',
    title: 'coffee mug -card',
    img: './coffee-mug.png'
  };
  const product2: Product = {
    id: '2',
    title: 'coffee mug -meme',
    img: './coffee-mug2.png'
  };
  const products: Product[] = [product1, product2];
  const product = products[0];

  return (
    <div>
      <h4>Shopping Page</h4>
      <hr />

      <ProductCard key={product.id} product={product} className='bg-dark text-white' initialValues={{ count: 4, maxCount: 10 }}>
        {({ reset }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
};
