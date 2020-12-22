import MockAdapter from "axios-mock-adapter";
import apiService from "../apiService";
import gifsService from "../gifsService";
import { GIPHY_API_KEY } from "../../configs/giphy";

describe("gifsService", () => {
  test("mock", async () => {
    const apiMock = new MockAdapter(apiService);
    const limit = 20;
    const offset = 0;

    apiMock
      .onGet("/gifs/trending", {
        params: {
          api_key: GIPHY_API_KEY,
          rating: "g",
          limit,
          offset,
        },
      })
      .reply(200, {
        data: [{}],
      });

    const response = await gifsService.fetchGifs(1, 20);
    const gifResponse = response.data.data;
    expect(gifResponse).toHaveLength(1);
    expect(gifResponse[0]).toEqual(
      expect.objectContaining({
        views: expect.any(Number),
        likes: expect.any(Number),
        comments: expect.any(Number),
      })
    );
  });
});
