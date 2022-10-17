import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Games Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Link href="/games/add">Add Game</Link>
          <LoginButton />
          <LogoutButton />
        </div>

        <h1 className={styles.title}>Welcome to the Games Tracker!</h1>

        {user && (
          <div>
            You are logged in as {user.name} and you can now access all of our
            super secret games content!
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
