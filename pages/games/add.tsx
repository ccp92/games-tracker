import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AddGameForm from "../../components/AddGameForm";

const AddGame: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Add Game</title>
        <meta name="description" content="Add a game to your collection" />
      </Head>
      <h1>Add Game</h1>
      <AddGameForm />
    </Fragment>
  );
};

export default AddGame;
