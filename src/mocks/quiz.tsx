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
      {
        id: 3,
        text: 'En quoi évolue Draco ?',
        choices: ['Dracofeu', 'Drattak', 'Dracolosse'],
        answers: [2],
      },
      {
        id: 4,
        text: 'En quoi évolu le Pokémon préféré de sacha ?',
        choices: ['Rattatac', 'Empiflor', 'Raichu'],
        answers: [2],
      },
      {
        id: 5,
        text: 'Qui évolue en Dracaufeu ?',
        choices: ['Salamèche', 'Reptincel'],
        answers: [0],
      },
    ],
  },
  {
    id: 2,
    name: "Connais tu la librairie React ?",
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
    name: "Connaissez-vous bien le monde du MCU ?",
    theme: 'films',
    questionsList: [
      {
        id: 5,
        text: 'OÙ IRON MAN A CRÉÉ SA PREMIÈRE ARMURE ?',
        choices: ['Dans sa maison', 'Dans le laboratoire de Stark Industries', 'Dans une grotte afghane'],
        answers: [2],
      },
      {
        id: 6,
        text: 'DE QUEL OBJET STAR-LORD NE SE SÉPARE T-IL JAMAIS ?',
        choices: ['Son casque', 'Son pendentif dent de requin', 'Son Walkman'],
        answers: [2],
      },
      {
        id: 7,
        text: 'OÙ SE DÉROULE LA COURSE DE FORMULE 1 DANS IRON MAN 2 ?',
        choices: ['Miami', 'Rome', 'Monaco'],
        answers: [2],
      },
    ],
  },
];

export default quizList;
