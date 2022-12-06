import React from "react";
import CharacterItem from "./CharacterItem";
import "../../../assets/api-style.css";

const CharactersList = (props) => {
  const { charactersList } = props;
  return (
    <ul className="characters-list">
      {charactersList.map((character) => {
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
        } = character;
        return (
          <CharacterItem
            key={character.id}
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            image={charImg}
            url={url}
            created={created}
          />
        );
      })}
    </ul>
  );
};

export default CharactersList;
