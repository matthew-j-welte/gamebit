import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import mountainGameImg from "../../../assets/sample-mountain-game.png";
import spaceGameImg from "../../../assets/sample-space-game.jpg";
import retroGameImg from "../../../assets/sample-retro-game.jpg";
import "./GameCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPlay,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { AppRoutes } from "../../constants/routes";

const imgMap = {
  "sample-mountain-game.png": mountainGameImg,
  "sample-space-game.jpg": spaceGameImg,
  "sample-retro-game.jpg": retroGameImg,
};

function GameCard({ gameCard, showPlayerStats = false, isBannerCard = false }) {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () =>
      navigate(AppRoutes.gameDetailsPage.replace(":gameId", gameCard.gameId)),
    [navigate, gameCard.gameId]
  );

  const gameStatsBar = (
    <div className="GameCardBottomBar d-flex justify-content-between align-items-center">
      <div>
        <FontAwesomeIcon icon={faPlay} />
        <em className="pl-2">{gameCard.playerPlays}</em>
      </div>
      <div>
        <FontAwesomeIcon icon={faChartLine} />
        <em className="pl-2">{gameCard.playerRanking}</em>
      </div>
      <div>
        <FontAwesomeIcon icon={faTrophy} />
        <em className="pl-2">
          {gameCard.tokensEarned} / {gameCard.totalGameTokens}
        </em>
      </div>
    </div>
  );

  return (
    <div
      className={`Container ${
        isBannerCard ? "BannerCardContainer" : "GameCardContainer"
      }`}
    >
      <div
        className={`ContentContainer ${
          isBannerCard ? "BannerContentContainer" : "CardContentContainer"
        }`}
      >
        <div
          className={`Game ${isBannerCard ? "BannerGameCard" : "GameCard"}`}
          style={{
            backgroundImage: `url(${imgMap[gameCard.gameImageUrl]})`,
          }}
        >
          <h5 className="CardHeader">{gameCard.name}</h5>
        </div>
        <div
          className={`Overlay ${
            isBannerCard ? "BannerGameCardOverlay" : "GameCardOverlay"
          }`}
          onClick={handleOnClick}
        ></div>
      </div>
      {showPlayerStats ? gameStatsBar : <></>}
    </div>
  );
}

export default GameCard;
