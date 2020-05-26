import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { purple } from "../constants";
import Button from "./Button";
export class Quiz extends Component {
  state = {
    score: 0,
    qN: 0,
    showAnswer: false,
  };
  toggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      showAnswer: !prevState.showAnswer,
    }));
  };
  onSubmission = (flag) => {
    if (flag) {
      this.setState((prevState) => ({
        ...prevState,
        qN: prevState.qN + 1,
        score: prevState.score + 1,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        qN: prevState.qN + 1,
      }));
    }
  };
  retakeQuiz = () => {
    this.setState({ score: 0, qN: 0 });
  };
  render() {
    const { questions, answers, name } = this.props;
    const { qN, score, showAnswer } = this.state;
    const totalQues = questions.length;
    if (totalQues === 0) {
      return (
        <View style={styles.container}>
          <Text>
            'There are No questions in the Quiz till now. Go back and add some
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
            <Button txt={"Correct"} onPress={() => this.onSubmission(true)} />
            <Button
              txt={"InCorrect"}
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
          <Button txt={"Re-take"} onPress={() => this.retakeQuiz()} />
          <Button txt={"Back to deck"} onPress={() => this.props.goBack()} />
        </View>
      </View>
    );
  }
}

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
