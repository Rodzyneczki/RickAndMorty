import React, { FC } from "react";
import useFetch from "react-fetch-hook";

import "../styles/CharacterDetails.scss";

interface EpisodeProps {
  episode: string;
}

const Episode: FC<EpisodeProps> = ({ episode }) => {
  const { data, error, isLoading } = useFetch<any>(episode);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <span>Loading....</span>;

  return (
    <span>
      {data.name} ({data.episode})
    </span>
  );
};

export default Episode;
