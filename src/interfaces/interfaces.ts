import { ReactElement } from 'react';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}
export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
