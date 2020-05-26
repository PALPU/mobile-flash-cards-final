/**
 * @description Deck Component which shows the deck-card with 2 buttons
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import DeckView from "./DeckView";
import {
  clearLocalNotification,
  addNotification,
} from "../utils/notifications";

export class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckView name={this.props.name} />
        <View>
          <Button
            txt={"Add New Card"}
            disabled={false}
            onPress={() =>
              this.props.navigation.navigate("NewCard", {
                name: this.props.name,
              })
            }
          />
          <Button
            txt={"Start Quiz"}
            disabled={false}
            onPress={() => {
              clearLocalNotification().then(addNotification);
              this.props.navigation.navigate("Quiz", {
                name: this.props.name,
              });
            }}
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
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state, { navigation }) => {
  const { name } = navigation.state.params;
  return {
    name,
    deck: state[name],
  };
};
export default connect(mapStateToProps)(Deck);
