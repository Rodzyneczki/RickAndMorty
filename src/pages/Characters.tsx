import React, { FC, useState, useContext } from "react";
import useFetch from "react-fetch-hook";
import { RickAndMortyContext } from "../context/RickAndMortyContext";
import Button from "../components/Button";
import CharactersList from "../components/CharactersList";
import ProblemAccess from "./ProblemAccess";
import "../styles/CharactersList.scss";

const Characters: FC = () => {
  const [url, setUrl] = useState<string>(
    "https://rickandmortyapi.com/api/character"
  );
  const { data, error, isLoading } = useFetch<any>(url);
  const { currentUser } = useContext(RickAndMortyContext);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <>Loading....</>;

  console.log(data);

  const next = () => {
    setUrl(data.info.next);
  };

  const prev = () => {
    setUrl(data.info.prev);
  };

  if (!currentUser?.name) return <ProblemAccess />;

  return (
    <>
      <h2>Characters:</h2>
      <div className="buttons">
        {data.info.prev && (
          <Button onClick={prev} variant="small" customClass="buttons__arrow">
            prev
          </Button>
        )}
        {data.info.next && (
          <Button onClick={next} variant="small" customClass="buttons__arrow">
            next
          </Button>
        )}
      </div>
      <CharactersList url={url} />
    </>
  );
};

export default Characters;
