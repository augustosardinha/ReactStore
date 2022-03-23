import styles from './CardShoe.module.css';
export default function CardShoe({ shoe, source, name, oldPrice, currentPrice, handleClick }) {
    
    return (
        <section className={styles.cardShoe}>
            <img src={source} alt="shoe" onClick={()=> handleClick(shoe)} />
            <h2>{name}</h2>
            <div className={styles.prices}>
                <div className={styles.priceShoe}>
                    <span>R${String(oldPrice).slice(0, 3)}.00</span>
                    <strong>R${String(currentPrice).padEnd(6, '0')}</strong>
                </div>
                <div className={styles.priceDivided}>
                    <strong>6x R${(currentPrice / 6).toFixed(2)} </strong>
                    <span>Sem juros</span>
                </div>
            </div>
        </section>
    );
}
