import * as React from 'react';
import { API } from '@aws-amplify/api';
import config from '../src/aws-exports.js';
API.configure(config);

import quizList from '../src/mocks/quiz';
import { fetchQuizzes } from '../src/DataOperations';
import Link from 'next/link';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    fetchQuizzes();
  }

  render() {
    return (
      <>
      <div className="container">
      <div className="notification">
        <div className="column is-centered">
        <div className="content has-text-centered">
        <section className="hero is-info">
          <div className="hero-body">
              <h1 className="title" > Awesome Quiz !!! </h1>
              <h2 className="subtitle"> done by Ilies Djedou with love </h2>
          </div>
        </section> 
        </div>       
        </div>
        <main>
        {quizList.map((quiz) => (
        <div className="tile is-ancestor is-centered" key={quiz.id}>
          <div className="tile is-vertical is-6">
            <div className="tile">
               <div className="tile is-parent is-vertical">
                 <article className="tile is-child notification is-info">
                    <p className="title"></p>
                    <p className="subtitle">
                       <span><Link href="/quiz/[id]" as={`/quiz/${quiz.id}`}>
                                <button className="button is-large is-fullwidth">
                                  <span className="icon has-text-success">
                                   <i className="fas fa-check-square"></i>
                                  </span>
                                  <span>{quiz.name}</span>
                                </button>
                              </Link> 
                       </span>
                    </p>
                 </article>
               </div>
               </div>
          </div>
        </div>
        ))}
        </main>
        </div>
        </div>
      </>
    );
  }
}

export default App;
//                    {{pathname:"quiz",query: {quiz.questionsList}}}>
