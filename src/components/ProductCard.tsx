import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { Product } from '../interfaces/interfaces';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct({ initialCount: 0, minValue: 0 });

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.img ? product.img : noImage} alt='coffee mug' />
      {/* <img className={ styles.productImg } src={ noImage } alt="coffee mug"/> */}

      <span className={styles.productDescription}>product.title</span>

      <div className={styles.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
          +
        </button>
      </div>
    </div>
  );
};
