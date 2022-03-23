import styles from './Main.module.css';
import CardShoe from '../../components/CardShoe/CardShoe';
import CardModal from '../../components/CardModal/CardModal';
import shoes from '../../data';
import { useEffect, useState } from 'react';

export default function Main() {
    const [momentShoe, setMomentShoe] = useState({});
    const [modal, setModal] = useState(true);

    useEffect(() => {
        setModal(state => !state);
    }, [momentShoe]);
    
    return (
        <main className={`${styles.main} ${styles.overflow}`}>
            {modal && <CardModal shoe={momentShoe} handleClick={setMomentShoe} />}
            {shoes.map((item) => (
                <CardShoe
                    key={item.id}
                    shoe={item}
                    source={item.image}
                    name={item.name}
                    oldPrice={item.oldPrice}
                    currentPrice={item.currentPrice}
                    handleClick={shoe => setMomentShoe(shoe)}
                />
            ))}
        </main>
    );
}
