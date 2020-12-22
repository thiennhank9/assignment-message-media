import { call, put, takeLatest } from "redux-saga/effects";
import gifsActions from "./gifsAction";
import gifsService from "../../services/gifsService";
import { transformGifResponse } from "../../utils";

function* fetchGifs(action) {
  try {
    const {
      payload: { page, pageSize },
    } = action;
    yield put(gifsActions.fetchGifsRequest());
    const response = yield call(gifsService.fetchGifs, page, pageSize);
    const responseGifs = response?.data?.data;
    const gifs = transformGifResponse(responseGifs);
    yield put(gifsActions.fetchGifsSuccess({ gifs, page, pageSize }));
  } catch (_error) {
    yield put(gifsActions.fetchGifsError());
  }
}

function* gifsSaga() {
  yield takeLatest(gifsActions.fetchGifs, fetchGifs);
}

export default gifsSaga;
