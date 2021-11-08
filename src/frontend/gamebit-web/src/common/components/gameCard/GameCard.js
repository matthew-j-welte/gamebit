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
import { GAME_DETAILS_ROUTE } from "../../constants/routes";

const imgMap = {
  "sample-mountain-game.png": mountainGameImg,
  "sample-space-game.jpg": spaceGameImg,
  "sample-retro-game.jpg": retroGameImg,
};

function GameCard({ gameCard }) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(GAME_DETAILS_ROUTE.replace(":gameId", gameCard.gameId)),
    [navigate, gameCard.gameId]
  );

  return (
    <div className="GameCardContainer">
      <div
        className="GameCard text-center"
        style={{
          backgroundImage: `url(${imgMap[gameCard.gameImageUrl]})`,
        }}
      >
        <h5 className="CardHeader">{gameCard.name}</h5>
      </div>

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
      <div className="GameCardOverlay w-100" onClick={handleOnClick}></div>
    </div>
  );
}

export default GameCard;
