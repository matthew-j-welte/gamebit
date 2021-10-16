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

    this.setState({
      ...this.state,
      allCards: allCards,
      continuePlayingCards: continuePlayingCards,
      newAndPopularCards: newAndPopularCards,
    });
  }

  render() {
    console.log(this.state);

    const cardMapper = (x) => (
      <div className="col-4">
        <GameCard gameCard={x} />
      </div>
    );
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
      <div className="Gamepad container-fluid">
        <h1 className="GamepadHeader pb-5">GAMEBIT</h1>
        <h2 className="SectionHeader">Continue Playing</h2>
        <div className="row">
          {continuePlayingCards ?? noCardsToShowComponent}
        </div>
        <h2 className="SectionHeader">New & Popular Games</h2>
        <div className="row">
          {newAndPopularCards ?? noCardsToShowComponent}
        </div>
        <h2 className="SectionHeader">Browse All Games</h2>
        <div className="row">{allCards ?? noCardsToShowComponent}</div>
      </div>
    );
  }
}

export default Gamepad;
