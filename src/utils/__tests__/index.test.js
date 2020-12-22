import {
  getRandomInt,
  getGifsMockMoreInfo,
  transformGifResponse,
  getLimitAndOffset,
} from "..";

test("getRandomInt - get random int correctly", () => {
  const randomInt = getRandomInt(0, 100);
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThanOrEqual(100);
});

test("getGifsMockMoreInfo - add mock info correctly", () => {
  const mockGifs = [{}];
  const gifsMockMoreInfo = getGifsMockMoreInfo(mockGifs);
  expect(gifsMockMoreInfo).toHaveLength(1);
  expect(gifsMockMoreInfo[0]).toEqual(
    expect.objectContaining({
      views: expect.any(Number),
      likes: expect.any(Number),
      comments: expect.any(Number),
    })
  );
});

test("transformGifResponse - transform gif response correctly", () => {
  const mockGifs = [
    {
      id: "id",
      images: {
        downsized: {
          url: "downsized_url",
        },
        original: {
          url: "original_url",
        },
      },
      title: "title",
      views: 1,
      likes: 1,
      comments: 1,
      user: {
        avatar_url: "avatar_url",
        display_name: "display_name",
      },
    },
  ];
  const expectedGif = {
    id: "id",
    images: {
      small: "downsized_url",
      original: "original_url",
    },
    title: "title",
    views: 1,
    likes: 1,
    comments: 1,
    avatar: "avatar_url",
    displayName: "display_name",
  };
  const transformedGifs = transformGifResponse(mockGifs);
  expect(transformedGifs).toHaveLength(1);
  expect(transformedGifs[0]).toMatchObject(expectedGif);
});

test("getLimitAndOffset - get limit and offset correctly", () => {
  const { offset, limit } = getLimitAndOffset(1, 15);
  expect(offset).toEqual(0);
  expect(limit).toEqual(15);
});
