import { ReactElement } from 'react';
import { ProductCard } from '../components/ProductCard';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  initialValues: InitialValues;
}

export interface InitialValues {
  count: number;
  maxCount: number;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
