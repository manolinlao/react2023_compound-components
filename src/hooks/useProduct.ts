import { useEffect, useRef, useState } from 'react';
import { Product, OnChangeArgs, InitialValues } from '../interfaces/interfaces';

export const useProduct = (product: Product, initialValues: InitialValues) => {
  const [counter, setCounter] = useState(initialValues.count);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  });

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    newValue = Math.min(newValue, initialValues.maxCount);
    setCounter(newValue);
  };

  const reset = () => {
    setCounter(initialValues.count);
  };

  return {
    counter,
    increaseBy,
    maxCount: initialValues.maxCount,
    reset,
    isMaxCountReached: !!initialValues.count && initialValues.maxCount === counter
  };
};
