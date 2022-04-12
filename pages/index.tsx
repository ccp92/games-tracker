import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Games Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Games Tracker!</h1>

        <p className={styles.description}>
          Get started by <Link href="/games/add">adding a game</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
