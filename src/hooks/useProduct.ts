import { useEffect, useState } from 'react';
import { Product, OnChangeArgs } from '../interfaces/interfaces';

export const useProduct = (product: Product, onChange?: (args: OnChangeArgs) => void, value: number = 0) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    // si viene función onChange, se ejecuta
    onChange && onChange({ count: newValue, product: product });
  };

  return { counter, increaseBy };
};
