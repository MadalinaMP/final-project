import React from "react";
import "../../../assets/api-style.css";

const EpisodeItem = (props) => {
  const { id, name, episode: episodeNr, air_date, url, created } = props;

  return (
    <div className="episode-item">
      <div className="ep-number"> #{id} </div>
      <div className="ep-info">
        <b>Name:</b> {name} <br />
        <b>Episode:</b> {episodeNr} <br />
        <b>Air Date:</b> {air_date} <br />
        <b>URL:</b> <a href={url}>'{name}' Episode Link</a> <br />
        <b>Created at:</b> {created} <br />
      </div>
    </div>
  );
};

export default EpisodeItem;
