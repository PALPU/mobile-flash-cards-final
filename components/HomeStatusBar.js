/**
 *  @description it's a functional component
 *  @returns : the status bar to the app
 */

import React from "react";
import Constants from "expo-constants";
import { View, StatusBar } from "react-native";

export default function HomeStatusBar(props) {
  const { backgroundColor } = props;

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: Constants.statusBarHeight,
      }}
    >
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle="light-content"
      />
    </View>
  );
}
