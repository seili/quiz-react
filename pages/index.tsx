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
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Awesome Quiz !!!</h1>
              <h2 className="subtitle">done by Ilies Djedou with love</h2>
            </div>
          </div>
        </section>
        <main>
          {quizList.map((quiz) => (
            <div className="card">
              <div className="card-content">
                <p className="title">{quiz.name}</p>
                <p className="subtitle">{quiz.questionsList.length} </p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <Link href="/quiz/[id]" as={`/quiz/${quiz.id}`}>
                      <a>C'est parti !!! </a>
                    </Link>
                  </span>
                </p>
              </footer>
            </div>
          ))}
        </main>
      </>
    );
  }
}

export default App;
//                    {{pathname:"quiz",query: {quiz.questionsList}}}>
