import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
        <div>
    <footer className={styles.footer}>
        <a
          href="https://tallessalmon.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido porㅤ
          <img src="/talles.svg" alt="Talles Salmon" className={styles.logo} />
          ㅤ Talles Salmon
        </a>
      </footer>
      </div>
      )
    }
export default Footer;