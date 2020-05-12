import { API } from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { nanoid } from "nanoid"
import {listQuizs, listQuestions} from "../src/graphql/queries" 
import { createQuestion } from "../src/graphql/mutations"


const fetchQuizzes = async () => {
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

  const add = async () => {
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


export { fetchQuizzes, add }