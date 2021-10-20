import { useState } from "react";
import "./ThreeDimensionalBox.scss";

const boxSideNames = ["front", "right", "back", "left", "top", "bottom"];

function ThreeDimensionalBox({ box, navRules, tiltedRight, tiltedLeft }) {
  const [activeSide] = useState("front");

  // function onSideSelected(e) {
  //   setActiveSide(e.target.value);
  // }

  const boxFaceComponents = boxSideNames
    .map((side) => ({
      name: side,
      className:
        "BoxFace" +
        side.charAt(0).toUpperCase() +
        side.substring(1).toLowerCase(),
    }))
    .map((side) => (
      <div key={side.name + "-face"} className={"BoxFace " + side.className}>
        {box[side.name]}
      </div>
    ));

  // const sideSelectionRadioBtns = boxSideNames.map((side) => (
  //   <label key={side + "-label"}>
  //     <input
  //       key={side + "-input"}
  //       type="radio"
  //       name="rotate-cube-side"
  //       value={side}
  //       onChange={onSideSelected}
  //     />{" "}
  //     {side}{" "}
  //   </label>
  // ));

  return (
    <div>
      <div className="scene">
        <div
          className={
            "box " +
            "show-" +
            activeSide +
            (tiltedRight ? "-tiltedRight " : tiltedLeft ? "-tiltedLeft" : "")
          }
        >
          {boxFaceComponents}
        </div>
      </div>
      {/* <p className="radio-group">{sideSelectionRadioBtns}</p> */}
    </div>
  );
}

export default ThreeDimensionalBox;
