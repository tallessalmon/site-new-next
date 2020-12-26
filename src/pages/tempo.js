import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString()

  return(
    <div className={styles.container,styles.bgimage}>
      <Head>
        <title>Next JS TESTE - TEMPO</title>
        <link rel="icon" href="/talles.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
        <h1 className={styles.title}>
          Página Tempo
        </h1> 
        <p></p>
        <div className={styles.description}>{dynamicDateString} (dinâmico)</div>
        <div className={styles.description}>{props.staticDateString} (estático)</div>

        <div className={styles.grid}>
          <Link href="/">
          <a className={styles.card}>
            <h3>Home &#127968;
            </h3>
            <p>Clique para voltar para a página Inicial..</p>
          </a>
          </Link>
          <Link  href="/sobre">
          <a className={styles.card}>
            <h3>Sobre &#10068;</h3>
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
export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString()

  return{
    props: {
      staticDateString
    },
    revalidate: 1000
  }
}
export default Tempo