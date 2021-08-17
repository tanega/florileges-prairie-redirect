import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Florilèges Prairies Urbaines</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Red+Hat+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.logo}
          src="/assets/home-section2-florileges-logo.svg"
          alt="Florileges Logo"
        />
        <div className={styles.content}>
          <p className={styles.tcenter}>
            Ce site de saisie n'est plus maintenu!
          </p>
          <p className={styles.tcenter}>
            Retrouvez toutes les ressources du protocole sur le nouveau portail
            du programme.
          </p>
        </div>
        <a
          href="https://www.suivis-espaces-verts.fr/"
          className={styles.button}
          tabindex="0"
        >
          https://www.suivis-espaces-verts.fr
        </a>
      </main>
    </div>
  );
}
