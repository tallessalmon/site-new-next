import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const NavBar = () =>{
  return(
    <div>
      <Head>
      <title>Next JS TESTE</title>
        <link rel="icon" href="/talles.ico" />
         <link rel="stylesheet" href="/materialize.min.css" />
         <script src="/materialize.min.js"></script>
      </Head>
      <div class="navbar-fixed">
      <nav>
        <div Class="nav-wrapper #e53935 red darken-1">
          <a href="#" Class="brand-logo"><img src="/talles.svg" alt="Talles Salmon" className={styles.logonavbar}/></a>
          <a href="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"><img src="/menumobile.svg" className={styles.menumobile}/></i></a>
          <ul id="nav-mobile" Class="right hide-on-med-and-down">
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link  href="/sobre"><a>SOBRE</a></Link></li>
            <li><Link  href="/tempo"><a>TEMPO</a></Link></li>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default NavBar