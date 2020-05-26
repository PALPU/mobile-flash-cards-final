/**
 *  @description: creating reducers
 */

import { RECEIVE_ALL_DATA, ADD_CARD, ADD_DECK_NAME } from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          cards: [...state[action.name].cards].concat(action.card),
        },
      };
    }
    case ADD_DECK_NAME: {
      return {
        ...state,
        [action.name]: {
          name: action.name,
          cards: [],
        },
      };
    }
    default: {
      return state;
    }
  }
}
