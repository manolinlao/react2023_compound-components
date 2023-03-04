import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, initialValues }: ProductCardProps) => {
  const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct(product, initialValues);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount: maxCount,
          product: product,
          increaseBy: increaseBy,
          reset: reset
        })}
      </div>
    </Provider>
  );
};
