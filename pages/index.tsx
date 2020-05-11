import * as React from "react";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { API } from "@aws-amplify/api";


import config from "../src/aws-exports.js"
import {listQuizs, listQuestions} from "../src/graphql/queries" 
import { nanoid } from "nanoid"
import { createQuestion } from "../src/graphql/mutations"


API.configure(config);




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
 
  fetchQuizzes = async () => {
    let result;
    try {
      // Fetch our list from the server
      result = await API.graphql(graphqlOperation(listQuestions, {}));
    } catch (err) {
      console.warn(err);
    }
    if (result.errors) {
      console.warn("Failed to fetch quiz list. ", result.errors);
    }
    if (result.data.listQuestions !== null) {
      console.log(" yeahh  !!! ", result.data)
    }
  }

  add = async () => {
      
    const question = {
      id: nanoid(),
      text: "En quoi évolue Pikachu ?",
      choices: [ "Raichu", "Ratatac", "Voltali"],
      answers: [0]
    };
    try {
      
      await API.graphql(graphqlOperation(createQuestion, {
        input: question
      }));
    } catch (err){
      console.warn(err);
    }

  }

  async componentDidMount() {
    this.fetchQuizzes();
  }
  
  render(){
    return (
      <>
        <header>
          <h2>To Do List</h2>
        </header>
        <main>Ilies</main>
      </>
    );

  } 
};



export default App;