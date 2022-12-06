import React from "react";
import EpisodeItem from "./EpisodeItem";
import "../../../assets/api-style.css";

const EpisodesList = (props) => {
  const { episodeList } = props;
  return (
    <ul className="episodes-list">
      {episodeList.map((episode) => {
        const {
          id,
          name,
          episode: episodeNr,
          air_date,
          url,
          created,
        } = episode;
        return (
          <EpisodeItem
            key={episode.id}
            id={id}
            name={name}
            episode={episodeNr}
            air_date={air_date}
            url={url}
            created={created}
          />
        );
      })}
    </ul>
  );
};

export default EpisodesList;
