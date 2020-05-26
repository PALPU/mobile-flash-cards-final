import { AsyncStorage } from "react-native";
import { data } from "./staticData";
import { FLASHCARDS_STORAGE_KEY } from "../constants";

function jsonifyObject(obj) {
  return JSON.parse(obj);
}
function stringifyJson(data) {
  return JSON.stringify(data);
}

/**
 *  @description :this function gets all the data from the storage and if no data is there gives the data from staticData.js file
 *  @returns     : full data oject
 */
export async function getAllData() {
  try {
    const dataFromStorage = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
    if (dataFromStorage === null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, stringifyJson(data));
      return data;
    } else {
      return jsonifyObject(dataFromStorage);
    }
  } catch (err) {
    console.log("error while fetching all data: ", err);
  }
}
/**
 *  @description //fetches all the cards of a deck
 *  @returns     // data object of a particular deck
 */
export async function getCards(name) {
  try {
    const tempData = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
    return jsonifyObject(tempData)[name];
  } catch (err) {
    console.log("error in fetching the cards of a deck", err);
  }
}

/**
 *  @description //helps to add the new Deck
 */
export async function addDeckNameAPI(name) {
  try {
    await AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY,
      stringifyJson({
        [name]: {
          name,
          cards: [],
        },
      })
    );
  } catch (err) {
    console.log("error while merging a deck title to the storage: ", err);
  }
}

/**
 *  @description //helps to add a new card
 */
export async function addCardToDeck(name, card) {
  try {
    const deck = await getCards(name);
    await AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify({
        [name]: {
          cards: [...deck.cards].concat(card),
        },
      })
    );
  } catch (err) {
    console.log("error in adding a card to deck", err);
  }
}
