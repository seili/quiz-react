const quizList = [
  {
    id: 1,
    name: "Connais tu bien l'univers pokemon ?",
    theme: 'pokemon',
    questionsList: [
      {
        id: 1,
        text: 'En quoi évolue Pikachu ?',
        choices: ['Raichu', 'Voltali', 'Ratatac'],
        answers: [0],
      },
      {
        id: 2,
        text: 'En quoi évolue Evoli ?',
        choices: ['Bulbi', 'Voltali', 'Aquali'],
        answers: [1, 2],
      },
    ],
  },
  {
    id: 2,
    name: "React c'est ouf !!!",
    theme: 'react',
    questionsList: [
      {
        id: 3,
        text: "Comment passe ton des données d'un composant à un autre?",
        choices: [
          'Via les props',
          'On peut passer des données ?',
          'Via le state',
        ],
        answers: [0],
      },
      {
        id: 4,
        text: "Peux-tu me citer d'autres frameworks ou librairies front ?",
        choices: ['Svelte', 'Vue', 'Angular'],
        answers: [0, 1, 2]
      },
    ],
  },
  {
    id: 3,
    name: "Connais tu bien l'univers digimon ?",
    theme: 'digimon',
    questionsList: [
      {
        id: 5,
        text: 'En quoi évolue A ?',
        choices: ['B', 'C', 'D'],
        answers: [1],
      },
    ],
  },
];

export default quizList;
