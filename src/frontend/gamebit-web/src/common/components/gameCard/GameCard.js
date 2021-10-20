import ThreeDimensionalBox from "../threeDimensionalBox/ThreeDimensionalBox";
import defaultGamePicture from "../../../assets/sample-arcade-game.jpg";
import "./GameCard.scss";

function GameCard({ gameCard, index }) {
  return (
    <ThreeDimensionalBox
      box={{
        front: (
          <div className="text-center pt-2">
            <h5 className="CardHeader">{gameCard.name}</h5>
            <img
              className="CardImg"
              src={defaultGamePicture}
              alt={gameCard.name}
            />
            <div className="ButtonContainer">
              <div role={"button"} className="ViewLevelsBtn">
                <h6>MENU</h6>
              </div>
              <div role={"button"} className="PlayGameBtn">
                <h6>PLAY</h6>
              </div>
              <div role={"button"} className="ExamineGame">
                <h6>MORE</h6>
              </div>
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
