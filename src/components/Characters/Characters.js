import React, { useEffect, useState } from "react";
import axios from "axios";
import CharactersList from "./CharactersList/index";
import "../../assets/api-style.css";

const Characters = () => {
  const [charactersList, setCharactersList] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        setCharactersList(results);
      }
    });
  }, []);

  return (
    <>
      <div className="page-title">
        <h1>Characters List</h1>
      </div>
      <CharactersList key={1} charactersList={charactersList} />
    </>
  );
};

export default Characters;
