import React, { FC } from "react";
import useFetch from "react-fetch-hook";
import CharacterCard from "./CharacterCard";
import { CharacterType } from "../types/Character";

import "../styles/CharactersList.scss";

interface CharactersListProps {
  url: string;
}

const CharactersList: FC<CharactersListProps> = ({ url }) => {
  const { data, error, isLoading } = useFetch<any>(url);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <>Loading....</>;

  const people = data.results;

  const charactersList = people.map(
    (character: CharacterType, index: number) => {
      const { name, id } = character;

      return (
        <CharacterCard character={character} key={`${name}-${index}`} id={id} />
      );
    }
  );

  return <div className="list">{charactersList}</div>;
};

export default CharactersList;
