// import { Dimensions } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from "react-navigation";
import AllDecks from "./AllDecks";
import NewDeck from "./NewDeck";
// import NewCard from "./NewCard";
import DeckView from "./DeckView";
import { black, darkGray, white } from "../constants";

/**
 *  Navigation component to create navogation for the app
 */

/**
 *  Main Tabs to navigate to AllDecksView of AddDeck view
 */

const Tabs = createMaterialTopTabNavigator(
  {
    Decks: {
      screen: AllDecks,
      navigationOptions: {
        tabBarLabel: "Decks",
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
      activeTintColor: white,
      style: {
        height: 60,
        backgroundColor: darkGray,
      },
    },
  }
);

/**
 *  Stack Navigator
 */

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkGray,
      },
      headerTitleStyle: { width: 100 },
    },
  },
  //   QuizView: {
  //     screen: QuizView,
  //     navigationOptions: {
  //       headerTintColor: white,
  //       headerStyle: {
  //         backgroundColor: black,
  //       },
  //       headerTitleStyle: { width: Dimensions.get("window").width },
  //     },
  //   },
  //   AddCard: {
  //     screen: NewCard,
  //     navigationOptions: {
  //       headerTintColor: white,
  //       headerStyle: {
  //         backgroundColor: darkGray,
  //       },
  //       headerTitleStyle: { width: Dimensions.get("window").width },
  //     },
  //   },
});

export default createAppContainer(Navigator);
