import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Games Tracker</title>
        <link rel="icon" href="/favicon.ico" />
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
        <h1>Welcome to the Games Tracker!</h1>

        <p>
          Get started by <Link href="/games/add">adding a game</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
