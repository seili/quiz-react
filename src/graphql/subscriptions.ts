/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
