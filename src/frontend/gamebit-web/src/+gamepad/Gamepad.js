import React, { useState, useEffect } from "react";
import "./Gamepad.scss";
import GameService from "../common/services/GameService";
import GameCard from "../common/components/gameCard/GameCard";
import GamepadGamePreview from "./components/GamepadGamePreview";
// import spaceGamePreview from "../assets/space-game-preview.gif";

//       allCards: null,
//       continuePlayingCards: null,
//       newAndPopularCards: null,
//       activeGamePreview: null,

function Gamepad() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [activeGamePreview, setActiveGamePreview] = useState(null);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    setAllGames(GameService.getGameCards());
  }, []);

  const jumbotronSection = allGames ? (
    <div className="GamepadJumbotronBackground">
      <div className="GamepadJumbotron container-fluid p-4 pt-3">
        <GamepadGamePreview gameCard={activeGamePreview} />
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

  const featuredGameCards = allGames?.map((card) => (
    <div key={card.gameId + "-game-card"} className="col-4 mx-0 px-0">
      <GameCard
        gameCard={card}
        isBannerCard={true}
        handleClick={() => setActiveGamePreview(card)}
      />
    </div>
  ));

  const allGameCards = allGames?.map((card) => (
    <div key={card.gameId + "-game-card"} className="col-4">
      <GameCard gameCard={card} />
    </div>
  ));

  return (
    <div>
      {jumbotronSection}
      <div className="Gamepad container">
        <div className="FeaturedGamesSection row">
          {featuredGameCards ?? noCardsToShowComponent}
        </div>
        <h2 className="AppSectionHeader text-center">Featured Games</h2>
        {/* <h2 className="AppSectionHeader">Browse All Games</h2>
          <div className="row">{allGames ?? noCardsToShowComponent}</div> */}
      </div>
    </div>
  );
}

export default Gamepad;
