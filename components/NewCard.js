import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import Button from "./Button";
import { addCard } from "../actions";
import { addCardToDeck } from "../utils/api";

export class NewCard extends Component {
  state = {
    ques: "",
    ans: "",
    name: this.props.name,
  };
  handleQuesChange = (value) => {
    console.log(value);
    this.setState({
      ques: value,
    });
  };
  handleAnsChange = (value) => {
    console.log(value);
    this.setState({
      ans: value,
    });
  };
  handleSubmit = () => {
    const { ques, ans, name } = this.state;
    const card = { ques, ans };
    addCardToDeck(name, card);
    this.props.dispatch(addCard(name, card));
    this.setState(() => ({
      ques: "",
      ans: "",
      name: "",
    }));
    this.props.backView();
  };
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.heading}>{this.props.name}</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.handleQuesChange(text)}
            value={this.state.ques}
            placeholder={"Feel free to add a new Question"}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.handleAnsChange(text)}
            value={this.state.ans}
            placeholder={"Write the correct answer!"}
          />
          <Button
            disabled={!(this.state.ques !== "" && this.state.ans !== "")}
            onPress={this.handleSubmit}
            txt={"Submit"}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: 22,
    marginRight: 14,
    marginLeft: 14,
    marginBottom: 25,
    marginTop: 20,
  },
  textInput: {
    minHeight: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    padding: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
  },
});

function mapStateToProps(state, { navigation }) {
  const { name } = navigation.state.params;
  return {
    name,
    backView: () => navigation.goBack(),
  };
}
export default connect(mapStateToProps)(NewCard);
