/**
 *  @description: this component renders the quiz in the App
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { purple } from "../constants";
import Button from "./Button";

export class Quiz extends Component {
  /**
   *  @description: state to store the current score, number of questions answered and whether to showing answer or not
   */
  state = {
    score: 0,
    qN: 0,
    showAnswer: false,
  };

  /**
   *  @description: helps to toggle between question and answer
   */
  toggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      showAnswer: !prevState.showAnswer,
    }));
  };

  /**
   *  @description: called when correct or Incorrect button is clicked with the flag-true(if correct) or false(if incorrect)
   */
  onSubmission = (flag) => {
    if (flag) {
      this.setState((prevState) => ({
        ...prevState,
        qN: prevState.qN + 1,
        score: prevState.score + 1,
        showAnswer: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        qN: prevState.qN + 1,
        showAnswer: false,
      }));
    }
  };

  /**
   *  @description: resets the state so that quiz can be retaken
   */
  retakeQuiz = () => {
    this.setState({ score: 0, qN: 0, showAnswer: false });
  };

  render() {
    const { questions, answers } = this.props;
    const { qN, score } = this.state;
    const totalQues = questions.length;
    if (totalQues === 0) {
      return (
        <View style={styles.container}>
          <Text>
            There are No questions in the Quiz till now. Go back and add some
            questions.
          </Text>
        </View>
      );
    }
    return qN + 1 <= totalQues ? (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            {qN + 1}/{totalQues}
          </Text>
        </View>
        <View>
          <View style={styles.container}>
            {this.state.showAnswer === true ? (
              <View>
                <View>
                  <Text style={styles.txtQues}>{answers[qN]}</Text>
                </View>
              </View>
            ) : (
              <View>
                <View>
                  <Text style={styles.txtQues}>{questions[qN]}</Text>
                </View>
              </View>
            )}
          </View>
          <View>
            <Button
              txt={this.state.showAnswer ? "Show Question" : "Show Answer"}
              onPress={() => this.toggle()}
            />
            <Button
              txt={"Correct"}
              disabled={!this.state.showAnswer}
              onPress={() => this.onSubmission(true)}
            />
            <Button
              txt={"InCorrect"}
              disabled={!this.state.showAnswer}
              onPress={() => this.onSubmission(false)}
            />
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View>
          <Text>Your Quiz is over!!</Text>
        </View>
        <View>
          <Text>
            Your Score is {score}/{totalQues}.
          </Text>
        </View>
        <View style={styles.btn}>
          <Button txt={"Restart Quiz"} onPress={() => this.retakeQuiz()} />
          <Button txt={"Back to deck"} onPress={() => this.props.goBack()} />
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
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  header: {
    alignSelf: "flex-start",
    margin: 10,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
  },
  headerContainer: {
    flex: 1,
    margin: 5,
  },
  txtQues: {
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    marginTop: 100,
  },
});

function mapStateToProps(state, { navigation }) {
  const { name } = navigation.state.params;
  console.log("name is ", name);
  console.log("deck is", state[name]);
  return {
    name,
    questions: state[name]["cards"].map((card) => card["ques"]),
    answers: state[name]["cards"].map((card) => card["ans"]),
    goBack: () => navigation.goBack(),
  };
}

export default connect(mapStateToProps)(Quiz);
