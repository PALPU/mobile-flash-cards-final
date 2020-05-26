/**
 *  @description: creates the navigator for the whole app
 *  @returns    : A container having the stack navigator
 */

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from "react-navigation";
import AllDecks from "./AllDecks";
import NewDeck from "./NewDeck";
import NewCard from "./NewCard";
import Deck from "./Deck";
import Quiz from "./Quiz";
import { darkGray, white, purple } from "../constants";

/**
 *  @description: Top-Tab Navigator
 */

const Tabs = createMaterialTopTabNavigator(
  {
    AllDecks: {
      screen: AllDecks,
      navigationOptions: {
        tabBarLabel: "All Decks",
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: darkGray,
        paddingTop: 5,
      },
    },
  }
);

/**
 *  @description: Stack Navigator
 */

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: "Deck",
      headerTitleStyle: {
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: "Quiz",
      headerTitleStyle: {
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
      },
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: "New Card",
      headerTitleStyle: {
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
      },
    },
  },
});

export default createAppContainer(Navigator);
