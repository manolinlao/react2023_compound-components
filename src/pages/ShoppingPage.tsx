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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
