import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AddGameForm from "../../components/AddGameForm";
import Link from "next/link";

const AddGame: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Add Game</title>
        <meta name="description" content="Add a game to your collection" />
      </Head>
      <main>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">Games Tracker</Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <h1>Add Game</h1>
        <AddGameForm />
      </main>
    </Fragment>
  );
};

export default AddGame;
