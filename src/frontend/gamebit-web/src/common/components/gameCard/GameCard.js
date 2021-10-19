import ThreeDimensionalBox from "../threeDimensionalBox/ThreeDimensionalBox";
import "./GameCard.scss";

function GameCard({ gameCard, index }) {
  return (
    <ThreeDimensionalBox
      box={{
        front: (
          <div className="text-center pt-3">
            <h5>{gameCard.name}</h5>
          </div>
        ),
      }}
      tiltedRight={index % 3 === 0}
      tiltedLeft={index % 3 === 2}
    />
  );
}

export default GameCard;
