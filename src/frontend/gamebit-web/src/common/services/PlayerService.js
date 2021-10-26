const PlayerService = {
  getPlayerProfile: function () {
    return {
      playerId: "1",
      username: "justSomeAsshole95",
      profileImageUrl: "default-profile-img.png",
      verifiedPlayerFullName: null,
      level: 33,
      previousLevelExperience: 6500,
      experience: 6652,
      nextLevelExperience: 6800,
      tokens: 42,
      topGames: [
        {
          gameId: "1",
          gameName: "Some Game 1",
          gameImageUrl: "default-game-img.png",
          playerPlays: 175,
          playerRanking: 97,
          tokensEarned: 4,
          totalGameTokens: 9,
        },
        {
          gameId: "3",
          gameName: "Some Game 3",
          gameImageUrl: "default-game-img.png",
          playerPlays: 105,
          playerRanking: 297,
          tokensEarned: 1,
          totalGameTokens: 7,
        },
        {
          gameId: "5",
          gameName: "Some Game 5",
          gameImageUrl: "default-game-img.png",
          playerPlays: 5,
          playerRanking: 8297,
          tokensEarned: 0,
          totalGameTokens: 5,
        },
      ],
      playerRankings: [
        {
          playerId: "2",
          ranking: 653,
          username: "someBetterFella",
          experience: 6005,
        },
        {
          playerId: "1",
          ranking: 654,
          username: "justSomeAsshole95",
          experience: 6005,
        },
        {
          playerId: "3",
          ranking: 655,
          username: "worseThanTheDudeLoggedIn",
          experience: 6005,
        },
      ],
      proffesionalTitle: "Software Engineer",
      yearsTechnicalExperience: 3,
      playerBio:
        "Here is my bio which is the description of me and my career and stuff, blah blah, blah",
      programmingLanguageExclusions: [
        {
          programmingLanguageId: "5",
          programmingLangaugeName: "Assembly",
          imageUrl: "default-language-img.png",
        },
        {
          programmingLanguageId: "8",
          programmingLangaugeName: "Java",
          imageUrl: "default-language-img.png",
        },
      ],
    };
  },
};

export default PlayerService;
