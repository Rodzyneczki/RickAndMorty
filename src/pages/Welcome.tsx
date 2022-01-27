import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { RickAndMortyContext } from "../context/RickAndMortyContext";

const Welcome: FC = () => {
  const { currentUser } = useContext(RickAndMortyContext);

  return (
    <>
      <h2>Welcome to Rick and Morty App!</h2>
      <p>
        You can view <Link to="/characters">the character list</Link>, add
        someone to your favorites list, or go to{" "}
        <Link to="/favourites">your favorites list</Link> and manage it
      </p>
      {!currentUser?.name ? <Link to="/login">Sign in</Link> : null}
    </>
  );
};

export default Welcome;
