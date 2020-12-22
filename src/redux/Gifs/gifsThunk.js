import gifsAction from "./gifsAction";
import gifsService from "../../services/gifsService";
import { transformGifResponse } from "../../utils";

const { fetchGifsRequest, fetchGifsSuccess, fetchGifsError } = gifsAction;

export function fetchGifs({ page, pageSize }) {
  return (dispatch) => {
    dispatch(fetchGifsRequest());

    return gifsService
      .fetchGifs(page, pageSize)
      .then((response) => {
        const responseGifs = response?.data?.data;
        const gifs = transformGifResponse(responseGifs);
        return dispatch(fetchGifsSuccess({ gifs, page, pageSize }));
      })
      .catch((_error) => dispatch(fetchGifsError()));
  };
}
