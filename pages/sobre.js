import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container,styles.bgimage}>
      <Head>
        <title>Next JS TESTE - Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
        <p> </p>
        <h1 className={styles.title}>
          Sobre
        </h1>

        <p className={styles.description}>
          Meu nome é Talles Salmon, sou Analista de sistemas e recentemente resolvi aprender mais sobre Next.js e esse é o meu primeiro site com base na pagina padrão do next.
        </p>

        <div className={styles.grid}>
        <Link href="/">
          <a className={styles.card}>
            <h3>Home &rarr;</h3>
            <p>Clique para voltar para a página Inicial..</p>
          </a>
          </Link>
          <Link  href="/tempo">
          <a className={styles.card}>
            <h3>Tempo &rarr;</h3>
            <p>Clique para ir para a página "Tempo"</p>
          </a>
          </Link>
        
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
