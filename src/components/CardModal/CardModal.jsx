import styles from './CardModal.module.css';
import { FaWindowClose } from 'react-icons/fa';

export default function CardModal({ shoe, handleClick }) {
    return (
        <section className={styles.cardModal}>
            <div className={styles.cardModalContent}>
                <div className={styles.close}>
                    <FaWindowClose  onClick={() => handleClick({})} />
                </div>
                <img src={shoe.image} alt="shoe" className={styles.shoe} />
                <h1>{shoe.name}</h1>
                <p>{shoe.description}</p>
                <div className={styles.buyPhase}>
                    <button>Comprar</button>
                    <div className={styles.prices}>
                        <div className={styles.priceShoe}>
                            <span>R${String(shoe.oldPrice).slice(0, 3)}.00</span>
                            <strong>R${String(shoe.currentPrice).padEnd(6, '0')}</strong>
                        </div>
                        <div className={styles.priceDivided}>
                            <strong>6x R${(shoe.currentPrice / 6).toFixed(2)} </strong>
                            <span>Sem juros</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
