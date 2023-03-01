import { ProductCard } from '../components/ProductCard';
import { Product } from '../interfaces/interfaces';

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
        <ProductCard product={product} />
      </div>
    </div>
  );
};
