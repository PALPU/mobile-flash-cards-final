import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { white, black, purple, gray, darkGray } from "../constants";

export default function Button(props) {
  const { onPress, txt, disabled = false, styleBtn, styleTxt } = props;
  const styleDisabledButton = disabled ? styles.disabledBtn : {};
  const styleDisabledButtonTxt = disabled ? styles.disabledBtnTxt : {};
  return (
    <View style={{ marginTop: 10, alignItems: "center", marginBottom: 20 }}>
      <TouchableOpacity
        style={[styles.btn, styleBtn, styleDisabledButton]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.textBtn, styleTxt, styleDisabledButtonTxt]}>
          {txt}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    backgroundColor: purple,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: black,
  },
  disabledBtn: {
    backgroundColor: gray,
    borderColor: darkGray,
  },
  textBtn: {
    fontSize: 22,
    fontWeight: "bold",
    color: white,
  },
  disabledBtnTxt: {
    fontSize: 22,
    fontWeight: "normal",
    color: gray,
  },
});
