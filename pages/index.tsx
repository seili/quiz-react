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
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"> Awesome Quiz !!! </h1>
              <h2 className="subtitle"> done by Ilies Djedou with love </h2>
            </div>
          </div>
        </section>        
        <main>
        {quizList.map((quiz) => (
        <div className="tile is-ancestor" key={quiz.id}>
          <div className="tile is-vertical is-8">
            <div className="tile">
               <div className="tile is-parent is-vertical">
                 <article className="tile is-child notification is-warning">
                    <p className="title">{quiz.name}</p>
                    <p className="subtitle">
                       <span><Link href="/quiz/[id]" as={`/quiz/${quiz.id}`}><a className="button is-info">C'est parti</a></Link></span>
                    </p>
                 </article>
               </div>
               </div>
          </div>
        </div>
        ))}
        </main>
      </>
    );
  }
}

export default App;
//                    {{pathname:"quiz",query: {quiz.questionsList}}}>
