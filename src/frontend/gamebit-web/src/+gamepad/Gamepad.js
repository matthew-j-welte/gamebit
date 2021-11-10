import React from "react";
import "./Gamepad.scss";
import GameService from "../common/services/GameService";
import GameCard from "../common/components/gameCard/GameCard";
import mountainGameImg from "../assets/sample-mountain-game.png";
import spaceGameImg from "../assets/sample-space-game.jpg";
import retroGameImg from "../assets/sample-retro-game.jpg";

const imgMap = {
  "sample-mountain-game.png": mountainGameImg,
  "sample-space-game.jpg": spaceGameImg,
  "sample-retro-game.jpg": retroGameImg,
};

class Gamepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: null,
      allCards: null,
      continuePlayingCards: null,
      newAndPopularCards: null,
    };
  }

  componentDidMount() {
    const allCards = [];
    const continuePlayingCards = [];

    // TODO: Make this async
    GameService.getGameCards().forEach((gameCard) => {
      allCards.push(gameCard);
    });

    this.setState({
      ...this.state,
      activeGamePreview: null,
      allCards: allCards,
      continuePlayingCards: continuePlayingCards,
    });
  }

  render() {
    const jumbotronSection = this.state.allCards ? (
      <div className="GamepadJumbotronBackground">
        <div className="GamepadJumbotron container-fluid p-4 pt-3">
          <div className="d-flex">
            <div className="ProgrammingLanguagePill">{}</div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );

    const noCardsToShowComponent = (
      <div className="NoCardsSlide">
        <h3>No Games to Show :(</h3>
      </div>
    );

    const featuredGames = this.state.allCards?.map((card) => (
      <div key={card.gameId + "-game-card"} className="col-4 mx-0 px-0">
        <GameCard gameCard={card} isBannerCard={true} />
      </div>
    ));

    const allGames = this.state.allCards?.map((card) => (
      <div key={card.gameId + "-game-card"} className="col-4">
        <GameCard gameCard={card} />
      </div>
    ));

    return (
      <div>
        {jumbotronSection}
        <div className="Gamepad container">
          <h2 className="AppSectionHeader">Featured Games</h2>
          <div className="row">{featuredGames ?? noCardsToShowComponent}</div>
          <h2 className="AppSectionHeader">Browse All Games</h2>
          <div className="row">{allGames ?? noCardsToShowComponent}</div>
        </div>
      </div>
    );
  }
}

export default Gamepad;
