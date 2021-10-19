import ThreeDimensionalBox from "../threeDimensionalBox/ThreeDimensionalBox";
import defaultGamePicture from "../../../assets/sample-arcade-game.jpg";
import "./GameCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GameCard({ gameCard, index }) {
  return (
    <ThreeDimensionalBox
      box={{
        front: (
          <div className="text-center pt-2">
            <h5 className="CardHeader">{gameCard.name}</h5>
            <img className="CardImg" src={defaultGamePicture} />
            <div className="ButtonContainer">
              <div role={"button"} className="ViewLevelsBtn"></div>
              <div role={"button"} className="PlayGameBtn"></div>
              <div role={"button"} className="ExamineGame"></div>
            </div>
          </div>
        ),
      }}
      tiltedRight={index % 3 === 0}
      tiltedLeft={index % 3 === 2}
    />
  );
}

export default GameCard;
