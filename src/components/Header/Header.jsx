import styles from './Header.module.css';
import cubosLogo from '../../assets/logo.svg';
export default function Header() {
    return (
        <header className={styles.header}>
                <section className={styles.category}>
                    <h1>MODA MASCULINA</h1>
                    <p>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</p>
                </section>
                <section className={styles.logo}>
                    <img src={cubosLogo} alt="logo" />
                </section>
        </header>
    );
}
