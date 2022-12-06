import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesList from "./EpisodesList/index";
import "../../assets/api-style.css";

const Episodes = () => {
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        setEpisodeList(results);
      }
    });
  }, []);

  return (
    <>
      <div className="page-title">
        <h1>Episodes List</h1>
      </div>
      <EpisodesList key={1} episodeList={episodeList} />
    </>
  );
};

export default Episodes;
