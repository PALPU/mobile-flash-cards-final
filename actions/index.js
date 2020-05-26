import { getAllData } from "../utils/api";

export const RECEIVE_ALL_DATA = "RECEIVE_ALL_DATA";
export const ADD_DECK_NAME = "ADD_DECK_NAME";
export const ADD_CARD = "ADD_CARD";

export function receiveAllData(data) {
  return {
    type: RECEIVE_ALL_DATA,
    data,
  };
}

export function addDeckName(name) {
  return {
    type: ADD_DECK_NAME,
    name,
  };
}

export function addCard(name, card) {
  return {
    type: ADD_CARD,
    name: name,
    card: card,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getAllData().then((data) => {
      dispatch(receiveAllData(data));
    });
  };
}
