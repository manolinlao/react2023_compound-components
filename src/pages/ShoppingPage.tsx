import { ProductCard } from '../components/ProductCard';
import { Product, OnChangeArgs } from '../interfaces/interfaces';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css';
import { useState } from 'react';

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

  // Ejemplo de cómo será el shoppingCart
  // shopping car -> un  objeto con el id del producto y para cada id del producto el mismo produco + count
  // le especificamos el tipo al useState
  /*
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
    '1': { ...product1, count: 10 },
    '2': { ...product2, count: 2 }
  });
  */
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  // esto ya no va a regresar el count sino si el contaje se ha incrementado en +1 o-1
  const onProductCountChange = (args: OnChangeArgs) => {
    console.log('on product count change', args);
    //ahora count valdrá 1 o -1
    const { count, product } = args;

    setShoppingCart((oldShoppingCart) => {
      // si no existe el producto creamos uno con count 0
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        //puedo incrementar
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        };
      }
      // si llegamos aqui es que el artículo no existe o el count es <0
      // hay que borrar el producto
      delete oldShoppingCart[product.id];
      return {
        ...oldShoppingCart
      };
    });
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={(onChangeArgs) => onProductCountChange(onChangeArgs)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div>
        <p>ShoppingCart</p>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            value={product.count}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            onChange={(onChangeArgs) => onProductCountChange(onChangeArgs)}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
