import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { addDeckName } from "../actions";
export class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text>New Deck</Text>
      </View>
    );
  }
}
function mapStateToProps() {
  return {
    addDeckName,
  };
}
export default connect(mapStateToProps)(NewDeck);
