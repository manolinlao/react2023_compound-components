import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

interface TitleProps {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: TitleProps) => {
  const { product } = useContext(ProductContext);

  return <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>;
};
