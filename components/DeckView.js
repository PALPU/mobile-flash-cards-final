import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, red, textGray, black } from "../constants";
import { connect } from "react-redux";

function DeckView(props) {
  console.log("props in class= ", props);
  if (props.deck === undefined) {
    console.log("undefined inside");
    return <View />;
  }
  return (
    <View style={styles.container}>
      {console.log("Inside name= ", props.deck.name)}
      {console.log("Inside cards length= ", props.deck.cards.length)}
      <View>
        <Text style={styles.deckName}>{props.deck.name}</Text>
      </View>
      <View>
        <Text
          style={styles.deckSize}
        >{`${props.deck.cards.length} Quiz cards`}</Text>
      </View>
    </View>
  );
}

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
