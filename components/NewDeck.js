/**
 * @description New Deck Component
 */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { lightGreen, black } from "../constants";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";
import { addDeckNameAPI } from "../utils/api";
import { addDeckName } from "../actions";
export class NewDeck extends Component {
  state = {
    deckName: "",
  };

  /**
   *  @description: changes the state of the class on the change of text in the Input box
   */

  onChangeText = (text) => {
    this.setState({ deckName: text });
  };

  /**
   *  @description: Thandles the click of Create Deck button on the new deck component
   */
  onSubmission = () => {
    const { deckName } = this.state;
    addDeckNameAPI(deckName);
    this.props.dispatch(addDeckName(deckName));
    this.setState({ deckName: "" });
    this.props.navigation.navigate("Deck", {
      name: deckName,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Enter New Deck Name in the input box</Text>
        <TextInput
          style={styles.inputTxt}
          placeholder={"Enter the Deck Name"}
          value={this.state.deckName}
          onChangeText={(text) => this.onChangeText(text)}
        />
        <View>
          <Button
            txt={"Create Deck"}
            disabled={this.state.deckName === ""}
            onPress={this.onSubmission}
          />
        </View>
      </View>
    );
  }
}

/**
 *  @description: styles object to give style to the components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 6,
    backgroundColor: lightGreen,
  },
  header: {
    margin: 8,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 30,
  },
  inputTxt: {
    borderRadius: 4,
    fontSize: 25,
    borderWidth: 3,
    borderColor: black,
    margin: 10,
    padding: 5,
  },
});

export default connect()(NewDeck);
