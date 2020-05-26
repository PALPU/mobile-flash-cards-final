import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
//import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DeckView from "./DeckView";
import { lightGreen, green, orange, black } from "../constants";
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
            <TouchableOpacity key={index}>
              {console.log("name= ", deck.name)}
              <DeckView name={deck.name} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#5BD2A4",
    backgroundColor: "#d15c63",
  },
  heading: {
    fontSize: 40,
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
