// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = `Zddo3H95jRw92tGnUjbAQb1QN6VEk6gN`;

export const getGifsByQuery = async (
  { query, numberGifsToRender },
  { signal }
) => {
  if (!query) return;
  if (query.length < 3) return;

  try {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${numberGifsToRender}`;

    const response = await fetch(URL, { signal });
    const { data } = await response.json();

    return await data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.fixed_height_downsampled.url,
      url: gif.url,
    }));
  } catch (err) {
    throw new Error("Something went wrong fetching gifs");
  }
};

export const getTrendingGifs = async ({ signal }) => {
  try {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

    const response = await fetch(URL, { signal });
    const { data } = await response.json();

    return data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.fixed_height_downsampled.url,
      url: gif.url,
    }));
  } catch (err) {
    throw new Error("Something went wrong fetching trending gifs");
  }
};

export const getGifById = async ({ id }, { signal }) => {
  try {
    const URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

    const response = await fetch(URL, { signal });
    const { data } = await response.json();

    const {
      id: _id,
      title,
      images,
      rating,
      import_datetime,
      url,
      user = {},
    } = data;
    return {
      id: _id,
      url,
      title,
      image: images.original.url,
      details: {
        frames: images.original.frames,
        width: images.original.width,
        height: images.original.height,
        rating,
        uploaded: import_datetime,
      },
      user: {
        name: user.username,
        avatar: user.avatar_url,
        description: user.description,
        is_verified: user.is_verified,
      },
    };
  } catch (err) {
    throw new Error("Something went wrong fetching trending gif");
  }
};
