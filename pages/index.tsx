import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

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

        {user && (
          <div>
            You are logged in as {user.name} and you can now access all of our
            super secret games content!
            <Link href="/api/auth/logout">Log out</Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
