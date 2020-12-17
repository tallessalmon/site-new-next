import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container,styles.bgimage}>
      <Head>
        <title>Next JS TESTE</title>
        <link rel="icon" href="/talles.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
        <h1 className={styles.title}>
          Bem vindo ao meu site em <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p> </p>
        <h2 className={styles.title}>
          Página Inicial
        </h2>

        <p className={styles.description}>
          Muito obrigado {' '}
          <code className={styles.code}><a href="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw">Filipe Deschamps-▶</a></code>
        </p>

        <div className={styles.grid}>
          <Link href="/sobre">
          <a className={styles.card}>
            <h3>Sobre &rarr;</h3>
            <p>Clique para ir para a página "Sobre"</p>
          </a>
          </Link>
          <Link href="/tempo">
          <a className={styles.card}>
            <h3>Tempo &rarr;</h3>
            <p>Clique para ir para a página "Sobre"</p>
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
