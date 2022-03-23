import styles from './Footer.module.css';
import { ImFacebook } from "react-icons/im";
import { CgInstagram } from "react-icons/cg";
import cubosLogo from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerInfo}>
                <h2>Endereço:</h2>
                <p>
                    Rua Cubos, 10 <br />
                    Jardim Academy <br />
                    Salvador - Bahia - CEP 41820-021
                </p>
                <div className={styles.logos}>
                    <ImFacebook />
                    <CgInstagram />
                </div>
            </section>
            <section className={styles.divider} />
            <section>
                <img src={cubosLogo} alt="cubos" />
            </section>
        </footer>
    );
}
