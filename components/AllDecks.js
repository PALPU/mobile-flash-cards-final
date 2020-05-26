/**
 *  @description //this component lists all the decks on the homepage
 */

import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
import DeckView from "./DeckView";
import { black } from "../constants";

export class AllDecks extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { decksList } = this.props;

    return (
      <ScrollView style={styles.container}>
        {console.log("decksList= ", decksList)}
        <Text style={styles.heading}>Mobile FlashCards</Text>
        {Object.values(decksList).map((deck, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                this.props.navigation.navigate("Deck", {
                  name: deck.name,
                })
              }
            >
              <DeckView name={deck.name} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

/**
 *  @description: styles object to give style to the components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d15c63",
  },
  heading: {
    fontSize: 36,
    textAlign: "center",
    color: black,
  },
});

function mapStateToProps(state) {
  console.log("Inside mapStateToProps of AllDecks");
  return {
    decksList: state,
  };
}

export default connect(mapStateToProps, { handleInitialData })(AllDecks);
