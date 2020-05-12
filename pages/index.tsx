import * as React from "react";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { API } from "@aws-amplify/api";


import config from "../src/aws-exports.js"
import {listQuizs, listQuestions} from "../src/graphql/queries" 
import { nanoid } from "nanoid"
import { createQuestion } from "../src/graphql/mutations"
import quiz from "../src/constants/quiz";
import questionsList from "../src/components/questionsList/questionsList";
import Questions from "../src/components/questionsList/questionsList";



API.configure(config);




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.state = {
      evolution: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({
      evolution: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    alert(`You chose ${this.state.evolution} .`);
  }

  
  render(){
    console.log(quiz);
    return (
      <>
        <header>
          <h2>Give the right answer</h2>
        </header>
        <main>
          {quiz.map((list) => (
           <div>
            <a className="question" key={list.id}>{list.question}</a>
            {list.choices.map((choice) => (
             <li className="choices"><input type="radio" 
                                            value={choice} 
                                            name="Choix"
                                            checked ={this.state.evolution === {choice}}
                                            onChange={this.handleChange}/>{choice}</li>
             ))}
           </div>
          ))}
           <div className="control">
            <button type="submit" className="button is-primary">Submit</button>
           </div>
        </main>
      </>
    );
  } 
};



export default App;