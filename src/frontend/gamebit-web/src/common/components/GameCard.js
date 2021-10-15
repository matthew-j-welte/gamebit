import "./GameCard.scss";

function GameCard({ gameCard }) {
  return (
    <div className="Card">
      <h3> {gameCard.name} </h3>
      <hr></hr>
      <p>
        <strong>
          <small>DIFFICULTY: </small>
        </strong>
        {gameCard.difficulty}
      </p>
      <p>
        <strong>
          <small>RATING: </small>
        </strong>
        {gameCard.rating}
      </p>
      <p>
        <strong>
          <small>PLAYS: </small>
        </strong>
        {gameCard.plays}
      </p>
    </div>
  );
}

export default GameCard;
