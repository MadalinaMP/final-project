import React from "react";
import "../../../assets/api-style.css";

const CharacterItem = (props) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image: charImg,
    url,
    created,
  } = props;

  return (
    <div className="character-item">
      <div className="char-img">
        <img src={charImg} alt="image" />
      </div>
      <div className="char-info">
        <div className="char-id">
          <b>Character ID:</b> {id}
        </div>
        <b>Name:</b> {name} <br />
        <b>Status:</b> {status} <br />
        <b>Species:</b> {species} <br />
        <b>Type:</b> {type} <br />
        <b>Gender:</b> {gender} <br />
        <b>URL:</b> <a href={url}> {name}'s Character Link</a> <br />
        <b>Created at:</b> {created} <br />
      </div>
    </div>
  );
};

export default CharacterItem;
