import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container,styles.bgimage}>
      <Head>
        <title>Next JS TESTE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
        <h1 className={styles.title}>
          Bem vindo ao meu de <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p> </p>
        <h2 className={styles.title}>
          Pagina Home
        </h2>

        <p className={styles.description}>
          Comece editando{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/sobre" className={styles.card}>
            <h3>Sobre &rarr;</h3>
            <p>Clique para ir para a página "Sobre"</p>
          </a>

          <a href="/tempo" className={styles.card}>
            <h3>Tempo &rarr;</h3>
            <p>Clique para ir para a página "Sobre"</p>
          </a>
        
        </div>
      </main>

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
