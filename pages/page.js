import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page() {
  return (<div>
            <Head>
              <title>Next JS TESTE</title>
              <link rel="icon" href="/talles.ico" />
            </Head>
            <body>
            <main className={styles.bgimage}>
              <center>
              <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
              <h1 className={styles.title}>
          Bem vindo ao meu site em <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p> </p>
        <h2 className={styles.title}>
          Página Inicial
        </h2>
              </center>
            </main>
               <div className={styles.container}
               ><h2 className={styles.paragrafo}>Hello World!!</h2>
               </div>
            </body>
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