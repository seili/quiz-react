const quizList = [
  {
    id: 1,
    name: "Connais tu bien l'univers pokemon ?",
    theme: 'pokemon',
    questionsList: [
      {
        id: 1,
        text: 'En quoi évolue Pikachu ?',
        choices: [
          {
            id: 1,
            value: 'Raichu',
            isCheked: false
          }, 
          {
            id: 2,
            value: 'Voltali',
            isCheked: false
          },
          { 
            id: 3,
            value: 'Ratatac',
            isCheked: false
          },
        ],
        answers: [1],
      },
      {
        id: 2,
        text: 'En quoi évolue Evoli ?',
        choices: [
          {
            id: 1,
            value: 'Bulbi',
            isCheked: false
          }, 
          {
            id : 2,
            value: 'Voltali',
            isCheked: false
          },
          { 
            id: 3,
            value: 'Ratatac',
            isCheked: false
          },
        ],
        answers: [2],
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
          {
            id: 1,
            value: 'Via les props',
            isCheked: false
          }, 
          {
            id: 2,
            value: 'On peut passer des données ?',
            isCheked: false
          },
          { 
            id: 3,
            value: 'Via le state',
            isCheked: false
          },
        ],
        answers: [1],
      },
      {
        id: 4,
        text: "Peux-tu me citer d'autres frameworks ou librairies front ?",
        choices: [
          {
            id: 1,
            value: 'Svelte',
            isCheked: false
          }, 
          {
            id: 2,
            value: 'Vue',
            isCheked: false
          },
          { 
            id: 3,
            value: 'Angular',
            isCheked: false
          },
        ],
        answers: [1, 2, 3],
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
        choices: [
          {
            id: 1,
            value: 'B',
            isCheked: false
          }, 
          {
            id: 2,
            value: 'C',
            isCheked: false
          },
          { 
            id: 3,
            value: 'D',
            isCheked: false
          },
        ],
        answers: [1],
      },
    ],
  },
];

export default quizList;
