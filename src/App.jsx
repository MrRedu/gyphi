import { useEffect } from "react";
import { getGifsByQuery } from "./services/gifs";

const App = () => {
  useEffect(() => {
    getGifsByQuery({ query: "react" }).then(console.log);
  }, []);

  return (
    <>
      <h1>{`</App>`}</h1>
    </>
  );
};

export default App;
