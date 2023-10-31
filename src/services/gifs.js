const API_KEY = `Zddo3H95jRw92tGnUjbAQb1QN6VEk6gN`;

// TODO: add Controller/Abort/Signal
// TODO: add Controller/Abort/Signal
// TODO: add Controller/Abort/Signal

export const getGifsByQuery = async ({ query }) => {
  if (!query) return;
  if (query.length < 3) return;

  try {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`;

    const response = await fetch(URL);
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

export const getTrendingGifs = async () => {
  try {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

    const response = await fetch(URL);
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

export const getGifById = async ({ id }) => {
  try {
    const URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

    const response = await fetch(URL);
    const { data } = await response.json();

    const { id: _id, title, images, url, user = {} } = data;
    return {
      id: _id,
      url,
      title,
      image: images.original.url,
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
