import React from "react";
import "./Gamepad.scss";
import GameService from "../common/services/GameService";
import GameCard from "../common/components/GameCard";

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
    const newAndPopularCards = [];

    // TODO: Make this async
    GameService.getGameCards().forEach((gameCard) => {
      allCards.push(gameCard);
      if (gameCard.playerCompletionPercentage) {
        continuePlayingCards.push(gameCard);
      } else if (gameCard.rating >= 4.1) {
        newAndPopularCards.push(gameCard);
      }
    });

    console.log(this.state);

    this.setState({
      ...this.state,
      allCards: allCards,
      continuePlayingCards: continuePlayingCards,
      newAndPopularCards: newAndPopularCards,
    });
  }

  render() {
    console.log(this.state);

    const cardMapper = (x) => <GameCard gameCard={x} />;
    const noCardsToShowComponent = (
      <div className="NoCardsSlide">
        <h3>No Games to Show :(</h3>
      </div>
    );

    const allCards = this.state.allCards?.map((x) => cardMapper(x));
    const continuePlayingCards = this.state.continuePlayingCards?.map((x) =>
      cardMapper(x)
    );
    const newAndPopularCards = this.state.newAndPopularCards?.map((x) =>
      cardMapper(x)
    );

    return (
      <div className="Gamepad container">
        <h1 className="GamepadHeader pb-5">GAMEBIT</h1>
        <h2 className="SectionHeader">Continue Playing</h2>
        <div className="d-flex">
          {continuePlayingCards ?? noCardsToShowComponent}
        </div>
        <h2 className="SectionHeader">New & Popular Games</h2>
        <div className="d-flex">
          {newAndPopularCards ?? noCardsToShowComponent}
        </div>
        <h2 className="SectionHeader">Browse All Games</h2>
        <div className="d-flex">{allCards ?? noCardsToShowComponent}</div>
      </div>
    );
  }
}

export default Gamepad;
