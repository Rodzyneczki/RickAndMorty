import React, { FC, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { RickAndMortyContext } from "../context/RickAndMortyContext";
import Button from "../components/Button";
import EpisodeList from "../components/EpisodeList";
import ProblemAccess from "./ProblemAccess";

import "../styles/CharacterDetails.scss";

const CharacterDetails: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const urlAPI = `https://rickandmortyapi.com/api/character/${id}`;
  const { data, error, isLoading } = useFetch<any>(urlAPI);
  const { favList, dispatchFav, currentUser } = useContext(RickAndMortyContext);
  const [buttonText, setButtonText] = useState<string>("Add to favorites");

  useEffect(() => {
    if (favList.find((character) => character.url.includes(urlAPI))) {
      setButtonText("Remove from favorites");
    } else {
      setButtonText("Add to favorites");
    }
  }, [favList, urlAPI, buttonText]);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <>Loading....</>;

  const { name, gender, episode } = data;

  const addFav = () => {
    dispatchFav({
      type: "ADD_FAV",
      payload: {
        ...data,
      },
    });
  };

  const removeFav = () => {
    dispatchFav({
      type: "REMOVE_FAV",
      payload: {
        ...data,
      },
    });
  };

  const checkFav = () => {
    if (favList.find((character) => character.name === name)) {
      removeFav();
    } else {
      addFav();
    }
  };

  if (!currentUser?.name) return <ProblemAccess />;

  return (
    <>
      <div className="character-details">
        <h2> {name}</h2>
        <span>Gender: {gender}</span>
        <span className="character-details__episode">
          Episode: <EpisodeList episodes={episode} />
        </span>
        <Button onClick={checkFav} variant="small" customClass="button-fav">
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default CharacterDetails;
