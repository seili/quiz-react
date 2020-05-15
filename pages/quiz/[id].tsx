import * as React from 'react';
import { Component } from 'react';

import { withRouter,Router } from 'next/router';
import Link from 'next/link';

import { fetchQuizzes } from '../../src/DataOperations';

import quizList from '../../src/mocks/quiz';

import Utils from '../../src/helpers/utils';


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
    score: any;
}

class Quiz extends Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
        id:  props.router.query.id,
        quiz: null,
        userInputs: new Array<UserChoice>(),
        score: null,
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
      choices: [Number(index)]
    }

    if(event.target.checked === true){ // I check a box
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
    }else{ // I uncheck a box
    /**
     * I remove the existing element if exist
     */
      for (let i = 0; i < newArray.length; i++) {
        if(newArray[i].idQuestion === tempUserChoice.idQuestion){
          if(newArray[i].choices.length===1){ 
             newArray.splice(i, 1);
          }else{
            //remove the element in  newArray[i].choices 
            let elementToRemove = newArray[i].choices.indexOf(tempUserChoice.choices[0])
            if(elementToRemove > -1)
              newArray[i].choices.splice(elementToRemove, 1); 
          }
        }
      }
    } 
    this.setState({
      userInputs: newArray
    });

  }

  handleSubmit() {
    //userInputs is full, let's compare it with the answer of questionList array
    /**
     * userInputs = [{idQuestion: 1, choices: [1, 2]}, {idQuestion: 2, choices: [0]}]
     * questionList = [{id: 1, answers: [1, 2]}, {id: 2, answers: [1]}]
     *  
     * 1/2 (une bonne réponse, une mauvaise)
     * 
     */
    let totalQuestions = this.state.quiz.questionsList.length
    let numberOfCorrectAnswers = 0
    let answerList;
    for (let i = 0; i < totalQuestions; i++) {
        let question = this.state.quiz.questionsList[i];
        for (let j = 0; j < this.state.userInputs.length; j++) {
          if(question.id === this.state.userInputs[j].idQuestion){
             if(Utils.compareArrays(question.answers,this.state.userInputs[j].choices)) 
              numberOfCorrectAnswers++
          }
        }
    } 

    this.setState({
      score: `${numberOfCorrectAnswers}/${totalQuestions}`
    })

    alert(`${numberOfCorrectAnswers} bonne réponses sur ${totalQuestions}!`);
      
    }

  render() {    
    return (
        <>
        
    <div className="container">
      <div className="notification">
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
              </div>
            </div>
          ))}
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                  <button className="button is-black" onClick = {() => this.handleSubmit()}>Valider</button>
                  {this.state.score &&  (
                    <a className="result">  You have a {this.state.score} score</a>
                  )}
                  </span>&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="button is-black" onClick={() => window.history.back()}>Back</button></span>
                </p>
              </footer>
        </div>
      </div>
          </>
    );
  }
}

export default withRouter(Quiz);
