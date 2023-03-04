import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

interface Props {
  className?: string;
}

export const ProductButtons = ({ className }: Props) => {
  // maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // isMaxReached = useCallback, dependencias [count, maxCount]
  // TRUE si count === maxCount
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>
        +
      </button>
    </div>
  );
};
