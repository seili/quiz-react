/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuizInput = {
  id?: string | null,
  name: string,
  theme: string,
};

export type ModelQuizConditionInput = {
  name?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  and?: Array< ModelQuizConditionInput | null > | null,
  or?: Array< ModelQuizConditionInput | null > | null,
  not?: ModelQuizConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateQuizInput = {
  id: string,
  name?: string | null,
  theme?: string | null,
};

export type DeleteQuizInput = {
  id?: string | null,
};

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  type?: string | null,
  image?: string | null,
  choices: Array< string | null >,
  answers: Array< number | null >,
  points?: number | null,
  explanation?: string | null,
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  choices?: ModelStringInput | null,
  answers?: ModelIntInput | null,
  points?: ModelIntInput | null,
  explanation?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  type?: string | null,
  image?: string | null,
  choices?: Array< string | null > | null,
  answers?: Array< number | null > | null,
  points?: number | null,
  explanation?: string | null,
};

export type DeleteQuestionInput = {
  id?: string | null,
};

export type ModelQuizFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  choices?: ModelStringInput | null,
  answers?: ModelIntInput | null,
  points?: ModelIntInput | null,
  explanation?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type CreateQuizMutationVariables = {
  input: CreateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type CreateQuizMutation = {
  createQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input: UpdateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type UpdateQuizMutation = {
  updateQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input: DeleteQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type DeleteQuizMutation = {
  deleteQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id: string,
};

export type GetQuizQuery = {
  getQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type ListQuizsQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizsQuery = {
  listQuizs:  {
    __typename: "ModelQuizConnection",
    items:  Array< {
      __typename: "Quiz",
      id: string,
      name: string,
      theme: string,
      questionsList:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        type: string | null,
        image: string | null,
        choices: Array< string | null >,
        answers: Array< number | null >,
        points: number | null,
        explanation: string | null,
      } | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz:  {
    __typename: "Quiz",
    id: string,
    name: string,
    theme: string,
    questionsList:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      type: string | null,
      image: string | null,
      choices: Array< string | null >,
      answers: Array< number | null >,
      points: number | null,
      explanation: string | null,
    } | null >,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    type: string | null,
    image: string | null,
    choices: Array< string | null >,
    answers: Array< number | null >,
    points: number | null,
    explanation: string | null,
  } | null,
};
