import React, { Component } from "react";
import { createStore } from "redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeStatusBar from "./components/HomeStatusBar";
import Navigator from "./components/Navigator";
import middleWare from "./middleWare";
import reducer from "./reducers";
import { white, green } from "./constants";
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends Component {
  render() {
    const store = createStore(reducer, middleWare);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomeStatusBar backgroundColor={green} />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
