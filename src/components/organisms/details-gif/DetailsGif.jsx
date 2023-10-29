import { getGifById } from "@/services/gifs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailsGif = () => {
  let { id } = useParams();

  const [gif, setGif] = useState({});

  useEffect(() => {
    getGifById({ id }).then(setGif);
  }, []);

  return (
    <>
      <h1>{`</DetailsGif>`}</h1>
      <p>{gif.title}</p>
      <img src={gif.image} alt={gif.title} />
    </>
  );
};
