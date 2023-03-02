import { useEffect, useRef, useState } from 'react';
import { Product, OnChangeArgs } from '../interfaces/interfaces';

export const useProduct = (product: Product, onChange?: (args: OnChangeArgs) => void, value: number = 0) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    console.log('value in useEffect = ' + value);
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    // si viene función onChange, se ejecuta
    if (isControlled.current && onChange) {
      return onChange({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    //confirmamos que si onChange tiene valor entonce la ejecutamos
    onChange && onChange({ count: newValue, product: product });
  };

  return { counter, increaseBy };
};
