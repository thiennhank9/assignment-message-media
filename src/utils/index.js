export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getGifsMockMoreInfo = (gifs) =>
  gifs.map((gif) => ({
    ...gif,
    views: getRandomInt(0, 10000),
    comments: getRandomInt(0, 1000),
    likes: getRandomInt(0, 1000),
  }));

export const transformGifResponse = (gifs) =>
  gifs.map((gif) => ({
    id: gif.id,
    images: {
      small: gif?.images?.downsized?.url,
      original: gif?.images?.original?.url,
    },
    title: gif?.title,
    views: gif?.views,
    likes: gif?.likes,
    comments: gif?.comments,
    avatar: gif?.user?.avatar_url,
    displayName: gif?.user?.display_name,
  }));

export const getLimitAndOffset = (page, pageSize) => ({
  offset: (page - 1) * pageSize,
  limit: pageSize,
});
