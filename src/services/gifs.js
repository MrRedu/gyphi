const API_KEY = `Zddo3H95jRw92tGnUjbAQb1QN6VEk6gN`;

export const getGifsByQuery = async ({ query }) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3`;

  const response = await fetch(URL);
  const { data } = await response.json();

  const mappedData = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return mappedData;
};

export const getTredingGifs = async () => {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

  const response = await fetch(URL);
  const { data } = await response.json();
  const mappedData = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return mappedData;
};
