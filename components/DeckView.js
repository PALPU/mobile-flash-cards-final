/**
 *  @description //this is a functional component
 * @returns :a deck-card
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, black } from "../constants";
import { connect } from "react-redux";

function DeckView(props) {
  console.log("props in class= ", props);
  if (props.deck === undefined) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.deckName}>{props.deck.name}</Text>
      </View>
      <View>
        <Text
          style={styles.deckSize}
        >{`${props.deck.cards.length} Quiz card(s)`}</Text>
      </View>
    </View>
  );
}

/**
 *  @description: styles object to give style to the components
 */
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: black,
    borderRadius: 6,
    marginBottom: 8,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    minHeight: 100,
    backgroundColor: white,
  },
  deckName: {
    fontSize: 30,
    color: black,
    fontWeight: "bold",
  },
  deckSize: {
    fontSize: 25,
    color: black,
  },
});

function mapStateToProps(state, props) {
  console.log("Inside mapStateToProps of DeckView");
  const { name } = props;
  return {
    deck: state[name],
  };
}

export default connect(mapStateToProps)(DeckView);
