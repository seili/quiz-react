import * as React from 'react';
import { Component } from 'react';

import { withRouter } from 'next/router'
import Link from 'next/link';

import { fetchQuizzes } from '../../src/DataOperations';

import quizList from '../../src/mocks/quiz';

export interface QuizProps {
    router: any
}
export interface QuizState {
    id: any;
    quiz: any;
    choose: any;
}

class Quiz extends Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
        id:  props.router.query.id,
        quiz: null,
        choose: null
    };
    
  }

  async componentDidMount() {

    let quiz;
    for (let i = 0; i < quizList.length; i++) {
        let q = quizList[i];
        if(q.id == this.state.id) quiz = q
    } 

    console.log("quiz found: ", quiz)

    this.setState({
        quiz: quiz
    })
    //fetchQuizzes();
  }
  
  handleInputChange(event) {
    const target = event.target;
    const choose = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

  }

  render() {
      console.log("quiz when rendered: ", this.state.quiz);
      console.log("state id when rendered: ", this.state.id); 
      console.log("checked :", this.state.choose);
      
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
                          type="checkbox"
                          checked={this.state.choose}
                          onChange={this.handleInputChange} /> { choice.value }
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
