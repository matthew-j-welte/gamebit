import { useState } from "react";
import "./GameCard.scss";

const boxSideNames = ["front", "right", "back", "left", "top", "bottom"];

function GameCard({ gameCard }) {
  const [activeSide, setActiveSide] = useState("front");
  const [isZoomed, setIsZoomed] = useState(false);

  function onSideSelected(e) {
    setActiveSide(e.target.value);
    setIsZoomed(true);
  }

  const boxFaceComponents = boxSideNames
    .map((side) => ({
      name: side,
      className:
        "BoxFace" +
        side.charAt(0).toUpperCase() +
        side.substring(1).toLowerCase(),
    }))
    .map((side) => {
      let innerHtml = null;
      if (side.name === "front") {
        innerHtml = (
          <div className="p-2 text-center">
            <h5 className="mt-1">{gameCard.name.toUpperCase()}</h5>
            <hr className="my-0"></hr>
            <img />
          </div>
        );
      }

      return (
        <div key={side.name + "-face"} className={"BoxFace " + side.className}>
          {innerHtml}
        </div>
      );
    });

  const sideSelectionRadioBtns = boxSideNames.map((side) => (
    <label key={side + "-label"}>
      <input
        key={side + "-input"}
        type="radio"
        name="rotate-cube-side"
        value={side}
        onChange={onSideSelected}
      />{" "}
      {side}{" "}
    </label>
  ));

  return (
    <div>
      <div className="scene">
        <div className={"box " + "show-" + activeSide}>{boxFaceComponents}</div>
      </div>
      <p className="radio-group">{sideSelectionRadioBtns}</p>
    </div>
  );
}

export default GameCard;
