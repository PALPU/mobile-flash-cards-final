/**
 *  @description describes the type of action that a reducer can take
 */
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
/**
 *  @returns :object of a deck
 *  @param  :name of the deck
 */
export function addDeckName(name) {
  return {
    type: ADD_DECK_NAME,
    name,
  };
}
/**
 *  @returns :object of a card
 *  @param  :name of the deck and object of a card
 */
export function addCard(name, card) {
  return {
    type: ADD_CARD,
    name: name,
    card: card,
  };
}

/**
 *  @returns :a function with dispatch as aparameter
 *
 */

export function handleInitialData() {
  return (dispatch) => {
    return getAllData().then((data) => {
      dispatch(receiveAllData(data));
    });
  };
}
