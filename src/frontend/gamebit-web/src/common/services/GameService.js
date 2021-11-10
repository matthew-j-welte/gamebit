const GameService = {
  getGameCards: function () {
    return [
      {
        gameId: "1",
        name: "The Retro Game",
        gameImageUrl: "sample-retro-game.jpg",
        totalGameTokens: 9,
        primaryColor: "#ff8400",
        secondaryColor: "#e33d00",
        difficulty: "Hard",
        creator: {
          playerId: 1,
          playerName: "matt-welte-dev",
        },
        dateCreated: "November 9, 2021",
        programmingLanguages: [
          {
            languageId: 1,
            name: "Python",
          },
          {
            languageId: 2,
            name: "Go",
          },
          {
            languageId: 3,
            name: "Javascript",
          },
          {
            languageId: 4,
            name: "C++",
          },
        ],
        associatedSkills: [
          {
            skillId: 1,
            name: "Algorithms",
          },
          {
            skillId: 2,
            name: "Parallel Processing",
          },
          {
            skillId: 3,
            name: "Architecture",
          },
        ],
        previewVideoUrl: "retro-game-preview.gif",
      },
      {
        gameId: "3",
        name: "Purple Game",
        gameImageUrl: "sample-mountain-game.png",
        playerPlays: 105,
        playerRanking: 297,
        tokensEarned: 1,
        totalGameTokens: 7,
        primaryColor: "#219101",
        secondaryColor: "#b969ff",
        difficulty: "Hard",
        creator: {
          playerId: 1,
          playerName: "matt-welte-dev",
        },
        dateCreated: "November 9, 2021",
        programmingLanguages: [
          {
            languageId: 1,
            name: "Python",
          },
          {
            languageId: 2,
            name: "Go",
          },
          {
            languageId: 3,
            name: "Javascript",
          },
          {
            languageId: 4,
            name: "C++",
          },
        ],
        associatedSkills: [
          {
            skillId: 1,
            name: "Algorithms",
          },
          {
            skillId: 2,
            name: "Parallel Processing",
          },
          {
            skillId: 3,
            name: "Architecture",
          },
        ],
        previewVideoUrl: "purple-game-preview.gif",
      },
      {
        gameId: "5",
        name: "Space Game",
        gameImageUrl: "sample-space-game.jpg",
        playerPlays: 5,
        playerRanking: 8297,
        tokensEarned: 0,
        totalGameTokens: 5,
        primaryColor: "#6a00ff",
        secondaryColor: "#3f00d4",
        difficulty: "Hard",
        creator: {
          playerId: 1,
          playerName: "matt-welte-dev",
        },
        dateCreated: "November 9, 2021",
        programmingLanguages: [
          {
            languageId: 1,
            name: "Python",
          },
          {
            languageId: 2,
            name: "Go",
          },
          {
            languageId: 3,
            name: "Javascript",
          },
          {
            languageId: 4,
            name: "C++",
          },
        ],
        associatedSkills: [
          {
            skillId: 1,
            name: "Algorithms",
          },
          {
            skillId: 2,
            name: "Parallel Processing",
          },
          {
            skillId: 3,
            name: "Architecture",
          },
        ],
        previewVideoUrl: "space-game-preview.gif",
      },
    ];
  },

  getGameDetails: function () {
    return {};
  },
};

export default GameService;
