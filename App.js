import React, { Component } from "react";
import { createStore } from "redux";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import HomeStatusBar from "./components/HomeStatusBar";
import Navigator from "./components/Navigator";
import middleWare from "./middleWare";
import reducer from "./reducers";
import { white, green } from "./constants";
import { addNotification } from "./utils/notifications";
export default class App extends Component {
  componentDidMount() {
    addNotification();
  }
  render() {
    /**
     *  @description: redux store
     */
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
