import React from "react";
import "./GamepadGamePreview.scss";

function GamepadGamePreview({ gameCard }) {
  const languagePills = gameCard?.programmingLanguages.map((language) => (
    <h2>{language.name}</h2>
  ));

  console.log(gameCard?.programmingLanguages);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="d-flex">{languagePills}</div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex">Game Preview Vid/GIF</div>
        </div>
        <div className="col-12 col-lg-3 text-center">
          In here it might make sense to do cols as well for each section so you
          can switch them to run horizontally instead of vertical
        </div>
      </div>
    </div>
  );
}

export default GamepadGamePreview;
