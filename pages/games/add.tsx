import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AddGameForm from "../../components/AddGameForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function AddGamePage() {
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
});
