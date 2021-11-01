import mountainGameImg from "../../../assets/sample-mountain-game.png";
import spaceGameImg from "../../../assets/sample-space-game.jpg";
import retroGameImg from "../../../assets/sample-retro-game.jpg";
import "./GameCard.scss";

const imgMap = {
  "sample-mountain-game.png": mountainGameImg,
  "sample-space-game.jpg": spaceGameImg,
  "sample-retro-game.jpg": retroGameImg,
};

function GameCard({ gameCard }) {
  return (
    <div className="GameCardContainer">
      <div
        className="GameCard text-center"
        style={{
          backgroundImage: `url(${imgMap[gameCard.gameImageUrl]})`,
        }}
      >
        {/* <div
        className="CardImg"
        style={{
          backgroundImage: imgMap[gameCard.gameImageUrl],
        }}
      /> */}
        <h5 className="CardHeader">{gameCard.name}</h5>
        {/* <div className="ButtonContainer d-flex justify-content-between align-items-center pt-2">
          <div
            role={"button"}
            className="ViewLevelsBtn"
            style={{
              backgroundColor: gameCard.secondaryColor,
            }}
          >
            <h6>MENU</h6>
          </div>
          <div
            role={"button"}
            className="PlayGameBtn"
            style={{
              backgroundColor: gameCard.primaryColor,
            }}
          >
            <h6>PLAY</h6>
          </div>
          <div
            role={"button"}
            className="ExamineGame"
            style={{
              backgroundColor: gameCard.secondaryColor,
            }}
          >
            <h6>MORE</h6>
          </div>
        </div> */}
      </div>
      <div className="GameCardOverlay"></div>
    </div>
  );
}

export default GameCard;
