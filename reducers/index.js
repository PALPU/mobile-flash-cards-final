import {
  RECEIVE_ALL_DATA,
  ADD_CARD,
  ADD_DECK_NAME,
  RESET_DATA,
  DELETE_DECK,
} from "../actions";

import { data } from "../utils/staticData";

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
    case DELETE_DECK: {
      const {
        [action.name]: {},
        ...newState
      } = state;
      return newState;
    }
    case RESET_DATA: {
      return data;
    }
    default: {
      return state;
    }
  }
}
