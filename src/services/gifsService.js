import apiService from "./apiService";
import { getGifsMockMoreInfo, getLimitAndOffset } from "../utils";
import { GIPHY_API_KEY } from "../configs/giphy";

const gifsService = {
  fetchGifs: (page = 1, pageSize = 20) => {
    const { offset, limit } = getLimitAndOffset(page, pageSize);
    const url = `/gifs/trending`;

    return (
      apiService
        .get(url, {
          params: {
            api_key: GIPHY_API_KEY,
            rating: "g",
            limit,
            offset,
          },
        })
        // Only in assignment for adding mock data
        .then((response) => {
          const gifs = response?.data?.data;
          const gifsWithMockInfo = getGifsMockMoreInfo(gifs);

          return {
            ...response,
            data: {
              data: gifsWithMockInfo,
            },
          };
        })
    );
  },
};

export default gifsService;
