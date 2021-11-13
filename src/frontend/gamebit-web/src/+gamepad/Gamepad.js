import React from "react";
import "./Gamepad.scss";
import GameService from "../common/services/GameService";
import GameCard from "../common/components/gameCard/GameCard";
import retroGamePreview from "../assets/retro-game-preview.gif";
import purpleGamePreview from "../assets/purple-game-preview.gif";
import GamepadGamePreview from "./components/GamepadGamePreview";
// import spaceGamePreview from "../assets/space-game-preview.gif";

const imgMap = {
  "retro-game-preview.gif": retroGamePreview,
  "purple-game-preview.gif": purpleGamePreview,
  "space-game-preview.gif": retroGamePreview,
};

class Gamepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: null,
      allCards: null,
      continuePlayingCards: null,
      newAndPopularCards: null,
      activeGamePreview: null,
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
      activeGamePreview: allCards[0],
      allCards: allCards,
      continuePlayingCards: continuePlayingCards,
    });
  }

  setActive = (gameCard) => {
    this.setState({
      ...this.state,
      activeGamePreview: gameCard,
    });
  };

  render() {
    console.log(this.activeGamePreview);

    const jumbotronSection = this.state.allCards ? (
      <div className="GamepadJumbotronBackground">
        <div className="GamepadJumbotron container-fluid p-4 pt-3">
          <GamepadGamePreview gameCard={this.activeGamePreview} />
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
        <GameCard
          gameCard={card}
          isBannerCard={true}
          handleClick={this.setActive}
        />
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
          <div className="FeaturedGamesSection row">
            {featuredGames ?? noCardsToShowComponent}
          </div>
          <h2 className="AppSectionHeader text-center">Featured Games</h2>
          {/* <h2 className="AppSectionHeader">Browse All Games</h2>
          <div className="row">{allGames ?? noCardsToShowComponent}</div> */}
        </div>
      </div>
    );
  }
}

export default Gamepad;
