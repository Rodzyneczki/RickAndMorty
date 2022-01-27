import React, { FC, useContext } from "react";
import { RickAndMortyContext } from "../context/RickAndMortyContext";
import CharacterCard from "../components/CharacterCard";
import ProblemAccess from "./ProblemAccess";
import { CharacterType } from "../types/Character";

import "../styles/CharactersList.scss";

const FavList: FC = () => {
  const { favList, currentUser } = useContext(RickAndMortyContext);

  const charactersList = favList.map(
    (character: CharacterType, index: number) => {
      const { name, id } = character;
      return (
        <CharacterCard character={character} key={`${name}-${index}`} id={id} />
      );
    }
  );

  if (!currentUser?.name) return <ProblemAccess />;

  return (
    <>
      <h2>Favourites characters:</h2>
      <div className="list">
        {charactersList.length ? charactersList : "there is nothing here"}
      </div>
    </>
  );
};

export default FavList;
