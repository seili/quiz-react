import * as React from 'react';
import { Component } from 'react';

import { withRouter } from 'next/router'
import Link from 'next/link';

import { fetchQuizzes } from '../../src/DataOperations';

import quizList from '../../src/mocks/quiz';

import Utils from '../../src/helpers/utils'

type UserChoice = {
  idQuestion: number,
  choices: Array<number>
}

export interface QuizProps {
    router: any
}
export interface QuizState {
    id: any;
    quiz: any;
    userInputs: Array<UserChoice>;
}

class Quiz extends Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
        id:  props.router.query.id,
        quiz: null,
        userInputs: new Array<UserChoice>()
    };
    
  }

  async componentDidMount() {

    let quiz;
    for (let i = 0; i < quizList.length; i++) {
        let q = quizList[i];
        if(q.id == this.state.id) quiz = q
    } 

    this.setState({
        quiz: quiz
    })
    //fetchQuizzes();
  }
  
  handleInputChange(event, questionId) {
    const index = event.target.name;
    let newArray = [...this.state.userInputs]
    const tempUserChoice : UserChoice = {
      idQuestion: questionId,
      choices: [Number(index)] // why an array ? could be a unique element
    }

    if(event.target.checked === true){ // I checked a bix
        let addedElement = false
        /**
         * If exist in array, I merge, otherwise I push
         */
        for (let i = 0; i < newArray.length; i++) {
          if(newArray[i].idQuestion === tempUserChoice.idQuestion){
            newArray[i].choices  = Utils.mergeUnique(newArray[i].choices, tempUserChoice.choices);
            addedElement = true
          }
        }
        if(addedElement === false){
          newArray.push(tempUserChoice);
        }
    }else{ // I unchecked a box
    /**
     * I remove the existing element if exist
     */
      for (let i = 0; i < newArray.length; i++) {
        if(newArray[i].idQuestion === tempUserChoice.idQuestion){
          if(newArray[i].choices.length===1){ 
             newArray.splice(i, 1);
          }else{
            //remove the element in  newArray[i].choices 
            for( let j = 0; j < newArray[i].choices.length; j++){
              if ( newArray[i].choices[j] === tempUserChoice.choices[0]) {
                newArray[i].choices.splice(i, 1); 
              }
             }
          }
        }
      }
    } 
    this.setState({
      userInputs: newArray
    });

  }

  render() {    
    return (
        <>
        {this.state.quiz && this.state.quiz.questionsList.map((question) => (
            <div className="card" key={question.id}>
              <div className="card-content">
                <p className="title">
                  { question.text }
                </p>
                {question.choices.map((choice,i) => (
                <ul key={i}>
                  <li className="choose">
                    <input className="choice"
                           type="checkbox" name={i}
                           onChange={(e) => this.handleInputChange(e, question.id)} /> { choice }
                  </li>
                </ul>
                ))}
          <p className="subtitle"> </p> 
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                  </span>
                </p>
              </footer>
            </div>
          ))}
          </>
    );
  }
}

export default withRouter(Quiz);
