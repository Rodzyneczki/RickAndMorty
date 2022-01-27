import React, { FC } from "react";
import Episode from "./Epiode";

import "../styles/EpisodeList.scss";

interface EpisodeListProps {
  episodes: string[];
}

const EpisodeList: FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div className="episode-list">
      {episodes.map((episode, index) => {
        return <Episode episode={episode} key={index} />;
      })}
    </div>
  );
};

export default EpisodeList;
