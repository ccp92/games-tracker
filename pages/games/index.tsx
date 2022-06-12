import { NextPage } from "next";
import { ReactNode } from "react";

const Games: NextPage = (props: {
  game?: { name: string };
  children?: ReactNode;
}) => {
  const { game } = props;
  return (
    <div>
      <h1>Games</h1>
      <h2>{game?.name}</h2>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      game: {
        name: "Tetris",
      },
    },
  };
}

export default Games;
