/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      name
      theme
      questionsList {
        id
        text
        type
        image
        choices
        answers
        points
        explanation
      }
    }
  }
`;
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        theme
        questionsList {
          id
          text
          type
          image
          choices
          answers
          points
          explanation
        }
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      type
      image
      choices
      answers
      points
      explanation
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        type
        image
        choices
        answers
        points
        explanation
      }
      nextToken
    }
  }
`;
