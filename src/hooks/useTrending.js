import { useState } from "react";
import { getTredingGifs } from "../services/gifs";

export function useTrending() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTrending = async () => {
    try {
      setLoading(true);
      const trendingGifs = await getTredingGifs();
      setTrending(trendingGifs);
    } catch (error) {
      setError("No se pudieron conseguir los gifs");
    } finally {
      setLoading(false);
    }
  };

  return {
    trending,
    error,
    loading,
    getTrending,
  };
}
